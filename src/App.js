


const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )

}



const Part= (props) => {
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>

    </div>
  )

}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises :  {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )

}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name}/>
      <Part courseName={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default App





