import { useState } from 'react'


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  
  
  const addVotes = (index) => {
    const copy = [...votes]
    copy[index] += 1
    setVotes(copy)
  }

  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  console.log(votes)
  
  return (
    <div>
      {anecdotes[selected]}     {votes[selected]} votes
      <br/>
      <button onClick={() => {setSelected(Math.floor(Math.random() * anecdotes.length))}}>next anecdotes</button>
      <button onClick={() => {addVotes(selected)}}>vote</button>

      <h3>Anecdote with more votes</h3>
      {anecdotes[votes.indexOf(Math.max(...votes))]} {Math.max(...votes)} votes


    </div>
  )
}

export default App
