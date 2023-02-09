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
  ///compotent qui affiche le pays forme de liste
  /// + un button plus des detailles a ôte de chaque pays 
  ///////////////////////////////////////////////////////////////
     const DisplayGet= () => {
      return (
        <div>  
          <ul>
          {filteredCountries.map(country => (
            <li key={country.alpha3Code}>{country.name} { <button onClick={() => this.setState({ selectedCountry: country })}></button>}</li>
          ))}
        </ul>
        </div>
      )
      }

      /////////////////////////////////////////
      ////affichier les detailes d'un pays 
      ///capital - superficie -image du drapeux 
      /////////////////////////////////////////////

      function CountryDetails({ country }) {
        return (
          <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km<sup>2</sup></p>
            <img src={country.flag} alt={`Flag of ${country.name}`}/>

            </div>
            )
          }


         function CountryDetails(country) {
            const { capital, area, flag, languages } = country;

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
        ) : filteredCountries.length === 1 ? (
          <CountryDetails country={filteredCountries[0]} />
        ) : (
        <DisplayGet />
      )}
    </div>
  );
}
 export default App;