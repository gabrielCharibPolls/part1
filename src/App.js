import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  //////////////////////////////////////////////////
  //les variables  + setteurs 
  ////////////////////////////////////////////////////

  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  ///////////////////////////////////////////////
  ///requette de l'api  
  ///////////////////////////////////////////////
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  ////////////////////////////////////////////////////////////////
  ///compotent qui contient le formulaire pour le filtrage 
  ///////////////////////////////////////////////////////////////
     const DisplayInput= () => {
      return (
        <div>  
          <input type="text" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} />
        </div>
      )
      }



  ////////////////////////////////////////////////////////////////
  ///compotent qui contient  affiche le pays forme de liste
  ///////////////////////////////////////////////////////////////
     const DisplayGet= () => {
      return (
        <div>  
          <ul>
          {filteredCountries.map(country => (
            <li key={country.alpha3Code}>{country.name}</li>
          ))}
        </ul>
        </div>
      )
      }



  //////////////////////////////////////////////////////////////////
  // Filtre les pays en fonction de la requête de recherche
  ///////////////////////////////////////////////////////////////
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <DisplayInput />
      {filteredCountries.length > 10 ? (
        <p>Please specify your search query</p>
      ) : (
        <DisplayGet />
      )}
    </div>
  );
}
 export default App;