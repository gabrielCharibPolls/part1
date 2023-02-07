const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }


  const Cours = (props) => {
    return(
      <div>
        <Header course={course} />
        <Content course={course} />
      </div>
        
    )
  }

  const Header = (props) => {
    return(
      <div>
      <h1>{props.course.name}</h1>
      </div>
        
    )
  }

  const Content = () => {
    return(
      <div>
      {course.parts.map(course => 
          <p key={course.name}>
            {course.name}
          </p>
        )}
      </div>
        
    )
  }

  return  (
    <div>
     
      <Cours course={course} />
      
    </div>
  ) 
  
}

export default App