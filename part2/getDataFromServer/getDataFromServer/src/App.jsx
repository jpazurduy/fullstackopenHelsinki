import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [notes, setNotes] = useState([])  
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  useEffect(hook, [])

  console.log('render', notes.length, 'notes')

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
