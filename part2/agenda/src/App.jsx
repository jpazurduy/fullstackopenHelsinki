import { useState } from 'react'



function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState("")

  const addingNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    //setPersons(persons.push({name: newName}))
  
  }
  
  const addName = (event) => {
    event.preventDefault()
    setPersons(persons.concat({name: newName}))
    debugger
    setNewName("")
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={addingNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
