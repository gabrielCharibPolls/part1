


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
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

  const course = 'Half Stack application development'
  const parts = [
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


  return (
    <div>
      <p>test</p>
      <Header course={course}/>
      <Part courseName={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default App





