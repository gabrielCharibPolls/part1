import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

///////////////////////////////
//methode compteur + 1
//////////////////////////////
const increaseByOne = () => setCounter(counter + 1 )
const decreaseByOne = () => setCounter(counter - 1)
const setToZero = () => setCounter(0)

/////////////////////////////////////////
//methode qui affiche le compteur 
////////////////////////////////////
const Display = (props) => {
return (
  <div>{props.counter}</div>
)

}
  return (
    <div>

    <Display counter={counter} />
    <button onClick={increaseByOne}> 
  plus
</button>
    <button onClick={setToZero}> 
        zero
      </button>

    </div>
  )
}

export default App