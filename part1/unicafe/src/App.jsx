
import React, { useState } from 'react'

const Buttons = () => {
  return (
    <div>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
    </div>
  )
}

// Component with props
const Statistics = (props) => {
  return (
    <div>
      <p>good    {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad     {props.bad}</p>
      <p>all     {props.good + props.neutral + props.bad}</p>
      <p>average {(props.good + props.neutral + props.bad)/3}</p>
      <p>positive{(props.good*100)/(props.good + props.neutral + props.bad)} %</p>
    </div>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good +1 )}>good</button>
        <button onClick={() => setNeutral(neutral +1 )}>neutral</button>
        <button onClick={() => setBad(bad +1 )}>bad</button>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </>
  )
}

export default App
