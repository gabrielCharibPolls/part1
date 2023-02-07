import { useState } from 'react'

const App = () => {

  /////////////////////////////////////////////////////
  //variables pout compter les clique dans les buttons 
  /////////////////////////////////////////////////////

  const [ counterGood, setCounterGod ] = useState(0)
  const [ counterNeutral, setCounterNeutral] = useState(0)
  const [ counterBad, setCounterBad ] = useState(0)

///////////////////////////////////////////////////
//methode compteur + setteur pour canger variable 
////////////////////////////////////////////////////


const increaseGod = () => setCounterGod(counterGood + 1 )
const increaseNeutral = () => setCounterNeutral(counterNeutral + 1)
const increaseBad = () => setCounterBad(counterBad + 1)

/////////////////////////////////////////
//composant titre 
////////////////////////////////////
const DisplayTitle= () => {
return (
  <h1>Give FeedBack</h1>
)
}

/////////////////////////////////////////
//composant statistiques 
////////////////////////////////////
const DisplayStates= () => {
  return (
    <div>
    <h1>Statistics</h1>
    <p>good : {counterGood}</p>
    <p>neutral : {counterNeutral}</p>
    <p>bad : {counterBad}</p>
    </div>
  )
  }


///////////////////////////////////////
///composant des 3  butons 
//////////////////////////////////////

const DisplayBouttons =  () => {
  return (
    <div>
    <button onClick={increaseGod}> 
    good 
  </button>
     <button onClick={increaseNeutral}> 
     neutral
   </button>
   <button onClick={increaseBad}> 
     Bad
   </button>
   </div>
  )
}
  return (
    <div>

    <DisplayTitle />
    <DisplayBouttons />
    <DisplayStates />
    
      
    </div>
  )
}

export default App