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


export const StatisticLine = (props) => {
  return (
    <div>
       <p>{props.text}   {props.value}</p>
    </div>
  )
}


const showStatistics = (props) => {
  if (props.isStatistics) {
    return (
      <div>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={props.good + props.neutral + props.bad}/>  
        <StatisticLine text="average" value={(props.good + props.neutral + props.bad)/3}/>
        <StatisticLine text="positive" value={(props.good*100)/(props.good + props.neutral + props.bad) + " %"} />
      </div>
    )
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}


// Component with props
const Statistics = (props) => {
  const hasFeedback = props.good !== 0 || props.neutral !== 0 || props.bad !== 0;

  return hasFeedback ? (
    showStatistics({ 
      good: props.good, 
      neutral: props.neutral, 
      bad: props.bad, 
      isStatistics: true 
    })
  ) : (
    showStatistics({ isStatistics: false })
  );
};


const Button = (props) => {
  return (
    <button onClick={() => {
      props.set(props.value +1 )}}>{props.comment}</button> 
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
        <Button comment="good" set={setGood} value={good}/>
        <Button comment="neutral" set={setNeutral} value={neutral}/>
        <Button comment="bad" set={setBad} value={bad}/>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </>
  )
}

export default App
