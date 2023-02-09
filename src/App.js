import React, { useState } from 'react';

const App = () => {
  const [phone, setPhone] = useState([]);
  const [Name, setName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');


  /////////////////////////////////////////////
  ////les setteurs 
  /////////////////////////////////////////////
  const handleSubmit = event => {
    event.preventDefault();
    setPhone([...phone, { Name, taskDescription }]);
    setName('');
    setTaskDescription('');
  };

  const DisplayInput= () => {
    return (
      <div>
          <label>
           Name:
           </label>
        <input
            type="text"
            value={Name}
            onChange={e => setName(e.target.value)}
          />
      </div>
    )
    }
  const DisplayPhone= () => {
    return (
      <div>
      <h3>Numbers:</h3>
      <ul>
        {phone.map((phone, index) => (
          <li key={index}>
            {phone.Name} : {phone.taskDescription}
          </li>
        ))}
      </ul>
      </div>
    )
    }


    ////////////////////////////////////////////////////////////////
    ///methode de filtrage  
    ///////////////////////////////////////////////////////////////
    const filteredName = phone.filter(phone => {
      return phone.Name.toLowerCase().includes(Name.toLowerCase());
    });


  const DisplayInputPhone= () => {
    return (
      <div>
          <label>
           Phone:
          <br />
          <input
            type="text"
            value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)}
          />
        </label>
      </div>
    )
    }


    ////////////////////////////////////////////////////////////////
    ///compotent qui contient le formulaire pour le filtrage 
    ///////////////////////////////////////////////////////////////
    const DisplayInputSearch = () => {
      return (
        <div>  
      <input
        type="text"
        placeholder="Search a phone number"
        value={phone}
        onChange={filteredName}
      />
        </div>
      )
      }


    /////////////////////////////////////////////
    ///compotent qui contient le formulaire 
    ////////////////////////////////////////////
    const DisplayForms= () => {
      return (
        <div>
          <form onSubmit={handleSubmit}>
          <DisplayInput />
          <br />
        <DisplayInputPhone />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
        </div>
      )
      }

  return (
    <div>
      <DisplayForms />
      <br />
      <DisplayInputSearch />
      <DisplayPhone />
    </div>
  );
};

export default App;
