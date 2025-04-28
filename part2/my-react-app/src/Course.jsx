
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

  export default Course
  