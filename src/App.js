import { useState ,useEffect } from 'react'
const App = () => {

  const [ counterOfAllCours, setCounterOfAllCours ] = useState(0)

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
      },
      
      {
        name: 'Redux',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
      , 
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
}

  useEffect(() => {
    const total = course.parts.reduce((acc, num) => acc + num, 0);
    setCounterOfAllCours(total);
  });

  const Cours = (props) => {
    return(
      <div>
        <Header course={course} />
        <Content course={course} />
        <Some course={course} />
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
///////////////////////////////////////////////////////////////////////////////////
//metode qui parcourir la liste et qui incrémenter la somme dans la variable some
//////////////////////////////////////////////////////////////////////////////////
  const Some = () => {
    let total = 0;
    course.parts.forEach(function(element) {
      total += element.exercises
      
    });
   console.log("total:",total)
  
    return(
      <div>
      <p> Total of exercises {total}</p>
      </div>
    )
  }

  const Content = () => {

    return(
      <div>
      {course.parts.map(course => 
          <p key={course.name}>
            {course.name} 
            {course.exercises}
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