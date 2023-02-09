import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [phone, setPhone] = useState([]);
  const [Name, setName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');



  /////////////////////////////////////////////
  ////comunique avec le back-ad 
  /////////////////////////////////////////////
  const handleSubmit = async event => {
    event.preventDefault();
    const data = { Name, taskDescription };

    try {
      await axios.post('db.json', data);
      setPhone([...phone, data]);
      setName('');
      setTaskDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  const DisplayInput = () => {
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
    );
  };
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
            value={Name}
            onChange={e => setName(e.target.value)}
          />
        </div>
      );
    };

    const handleDelete = index => {
      const confirmDelete = window.confirm(Are you sure you want to delete ${phone[index].Name});
      if (confirmDelete) {
      setPhone(phone.filter((phone, i) => i !== index));
      }
      };
      
      

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
      <form onSubmit={handleSubmit}>
      <DisplayForms />
      <br />
      <DisplayInputSearch />
      <DisplayPhone />

      <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;