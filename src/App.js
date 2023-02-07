import { useState } from 'react'

const App = () => {

  /////////////////////////////////////////////////////
  //variables pour compter les clique dans les buttons 
  /////////////////////////////////////////////////////

  const [ counterGood, setCounterGod ] = useState(0)
  const [ counterNeutral, setCounterNeutral] = useState(0)
  const [ counterBad, setCounterBad ] = useState(0)
  const [ counterAll, setCounterAll ] = useState(0)
  const [ counterAverage, setCounterAverage ] = useState(0)
  const [ counterPositivePourcentage, setPositivePourcentage] = useState(0)

///////////////////////////////////////////////////
//methode compteur + setteur pour canger variable 
////////////////////////////////////////////////////


const increaseGod = () => {
  setCounterGod(counterGood + 1 )
  setCounterAll(counterAll + 1)
  setCounterAverage(counterAverage+1)
  setPositivePourcentage(counterPositivePourcentage + (counterGood/counterAll) *100)
};
const increaseNeutral = () => {
  setCounterNeutral(counterNeutral + 1)
  setCounterAll(counterAll + 1)

};
const increaseBad = () => {
  setCounterBad(counterBad + 1)
  setCounterAll(counterAll + 1)
  setCounterAverage(counterAverage-1)
};

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
    <p>all : {counterAll}</p>
    <p>Avarage  : {counterAverage}</p>
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
    {counterAll >= 1 && <DisplayStates />}
  
    </div>
  )
}

export default App