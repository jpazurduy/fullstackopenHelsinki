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
      <form onSubmit={props.isAddOrUpdate ? props.addData : props.updateData}>
        <div>
          name: <input value={props.newName} onChange={props.addingNewName}/>
          
        </div>
        <div>
        Number: <input value={props.newNumber} onChange={props.addingNewNumber}/>
        </div>
        <div>
          <button type="submit">{props.isAddOrUpdate ? "Add" : "Update"}</button>
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
          <li key={index}>{person.name} {person.number} 
          <button onClick={() => {props.deleteContact(person.id)}}> Delete </button>
          <button onClick={() => {props.updateNumber(person.id)}}> Update </button></li>
        ))}
    </ul>
  )
}

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddOrUpdate, setIsAddOrUpdate] = useState(true)

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

    apiService
      .create({name: newName, number: newNumber})
      .then(person => { 
        setPersons(persons.concat(person))
      })

    // setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
    alert(`${newName} added to phonebook`)
    
    setNewName("")
    setNewNumber("")
  }

  const updateData = (event) => {
    event.preventDefault()
    const personToUpdate = persons.find(person => person.name === newName)
    if (!personToUpdate) {
      alert(`${newName} is not found in phonebook`)
      return
    }
    const updatedPerson = { ...personToUpdate, number: newNumber }
    apiService
      .update(personToUpdate.id, updatedPerson)
      .then(updated => {
        setPersons(persons.map(person => person.id !== personToUpdate.id ? person : updated))
        alert(`${newName} updated in phonebook`)
      })
      .catch(error => {
        console.error("Error updating contact:", error)
      })
    setNewName("")
    setNewNumber("")
    setIsAddOrUpdate(true)
  }

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      apiService
        .delete(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          console.error("Error deleting contact:", error)
        })
    }
  }

  const updateNumber = (id) => {
    const personToUpdate = persons.find(person => person.id === id)
    setNewName(personToUpdate.name)
    setNewNumber(personToUpdate.number)
    setIsAddOrUpdate(false)
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
        updateData={updateData}
        isAddOrUpdate={isAddOrUpdate}
      />

      <ContactList showFilteredContacts={showFilteredContacts} deleteContact={deleteContact} updateNumber={updateNumber} />
    </div>
  )
}

export default App
