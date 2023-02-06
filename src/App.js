


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
      <p>{props.courseName} {props.nombreExercies}</p>

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
      <Header course={course}/>
      <Part courseName={parts[0].name} nombreExercies={parts[0].exercises} />
      <Part courseName={parts[1].name} nombreExercies={parts[1].exercises} />
      <Part courseName={parts[2].name} nombreExercies={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
    </div>
  )
}

export default App





