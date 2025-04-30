import { useState } from 'react'



function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' }]) 
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const addingNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addingNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const addData = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({name: newName, number: newNumber}))
    alert(`${newName} added to phonebook`)
    
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addData}>
        <div>
          name: <input value={newName} onChange={addingNewName}/>
          
        </div>
        <div>
        Number: <input value={newNumber} onChange={addingNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
