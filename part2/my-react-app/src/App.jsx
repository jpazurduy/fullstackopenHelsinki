
import React from 'react'

const Part = (props) => {
  return (
    <div>
       <p>{props.part} {props.exercise}</p>
    </div>
  )
}


const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props.parts)
  console.log("====================")
  return (
    <div>
      {props.parts.map(part => (
        <Part part={part.name} exercise={part.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  console.log(props.parts)
  
  const sum = props.parts.reduce((sum, part) => sum + part.exercises, 0 )
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const Course = ({courses}) => {
  
  return (
    <div>
      { courses.map( course => (
        <div key={course.id}>
          <Header course={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>
        </div>
      ))}
    </div>
  )
}


function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App
