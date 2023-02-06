import './App.css';


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )

}

const App = () => {
  return (
    <div>
      <h>Gretings</h>
      <Hello name="Juan" />
      <Hello name="Garcia" />
    </div>
  )

}





export default App


