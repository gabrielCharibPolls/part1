import { useState } from 'react'

const App = () => {
  const [elements, setElements] = { 0: 1, 1: 3, 2: 4, 3: 2 };

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
/////////////////////////////////////////////////////////////
//methode qui va incrementer de 1 à un incide d'un tableau 
//////////////////////////////////////////////////////////////
  const like = (index) => {
    const updatedElements = [elements];
    updatedElements[index] += 1 
    setElements(updatedElements);
  };


  //////////////////////////////////////////////////////////////////////
 //composant qui afficher les nombre des votre que une anecdote à eu 
 /////////////////////////////////////////////////////////////////////
 const nombrerOfLikes = (props) => {
  return(
    <p> has {props.number} votes</p>
  )

}
   
  const [randomNumber, setRandomNumber] = useState(0)

  /////////////////////////////
  //genere un nombre aleatoire 
  // entre 0 à 6
  ////////////////////////////

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 7));
  };

  return (
    <div>
      {anecdotes[randomNumber]}
      <nombrerOfLikes  number={randomNumber}/>
      <button onClick={() => like(randomNumber,)}> 
     vote
      </button>
      <button onClick={generateRandomNumber}> 
     next anecdotes 
      </button>
   <p>{randomNumber}</p>
    </div>
  )
}

export default App