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
    <div>{props.text}   {props.value}</div>
  )
}


const showStatistics = (props) => {
  if (props.isStatistics) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><StatisticLine text="good"/></td>
              <td>{props.good}</td>
            </tr>
            <tr>
              <td><StatisticLine text="neutral"/></td>
              <td>{props.neutral}</td>
            </tr>
            <tr>
              <td> <StatisticLine text="bad"/></td>
              <td>{props.bad}</td>
            </tr>
            <tr>
              <td><StatisticLine text="all"/></td>
              <td>{props.good + props.neutral + props.bad}</td>
            </tr>
            <tr>
              <td><StatisticLine text="average" /></td>
              <td>{(props.good + props.neutral + props.bad)/3}</td>
            </tr>
            <tr>
              <td><StatisticLine text="positive" /></td>
              <td>{(props.good*100)/(props.good + props.neutral + props.bad) + " %"}</td>
            </tr>
          </tbody>
        </table>
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
