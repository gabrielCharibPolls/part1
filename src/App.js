


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
       <p>{props.course[0].name} {props.course[0].exercises } </p>
       <p>{props.course[1].name} {props.course[1].exercises } </p>
       <p>{props.course[2].name}  {props.course[2].exercises } </p>
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
      <Part course={course.parts} />
      
      
    </div>
  )
}

export default App





