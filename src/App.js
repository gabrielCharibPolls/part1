


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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Part courseName={part1.name} nombreExercies={part1.exercises} />
      <Part courseName={part2.name} nombreExercies={part2.exercises} />
      <Part courseName={part3.name} nombreExercies={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>
  )
}

export default App





