import { useEffect, useState } from 'react'
import apiService from './services/persons'

const Search = (props) => {
  return (
    <div>
        <h3>Phonebook Search</h3>
        Search : <input value={props.searchTerm} onChange={props.addingSearchTerm}/>
    </div>
  )
}



const Form = (props) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={props.addData}>
        <div>
          name: <input value={props.newName} onChange={props.addingNewName}/>
          
        </div>
        <div>
        Number: <input value={props.newNumber} onChange={props.addingNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

const ContactList = (props) => {
  return (
    <ul>
        { props.showFilteredContacts.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
    </ul>
  )
}

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    console.log("useEffect called")
    apiService
    .getAll()
    .then(persons => {
      setPersons(persons)
    })
    
  }, [])
  
  const showFilteredContacts = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const addingNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addingNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addingSearchTerm = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }
  
  const addData = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
    alert(`${newName} added to phonebook`)
    
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      
      <Search searchTerm={searchTerm} addingSearchTerm={addingSearchTerm} />
      
      <Form
        newName={newName}
        newNumber={newNumber}
        addingNewName={addingNewName}
        addingNewNumber={addingNewNumber}
        addData={addData}
      />

      <ContactList showFilteredContacts={showFilteredContacts} />
    </div>
  )
}

export default App
