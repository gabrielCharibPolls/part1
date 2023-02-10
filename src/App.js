import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [phone, setPhone] = useState([]);
  const [Name, setName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('some error happened...')
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleSuccess = () => {
    setNotificationMessage('Opération réussie !');
    setShowNotification(true);
  
  return (
    <div>
      {showNotification && (
        <SuccessNotification message={notificationMessage} />
      )}
      <button onClick={handleSuccess}>Déclencher l'opération réussie</button>
    </div>
  );
};

  const handleClick = () => {
    const result = window.confirm("Êtes-vous sûr de vouloir continuer ?");
    setShowConfirm(result);
  };

  return (
    <div>
      <button onClick={handleClick}>Afficher la boîte de dialogue</button>
      {showConfirm && <p>Vous avez choisi "OK"</p>}
    </div>
  );
}

//////////////////////////////////////////////////////////////
///compotent qui contient une notification avec un style  
////////////////////////////////////////////////////////////

const SuccessNotification = ({ message }) => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 3000);

  return (
    show && (
      <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
        {message}
      </div>
    )
  );
};


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


/////////////////////////////////////////////////////////////////
///methode qui permet de mettre à jour le numero de telephone 
/////////////////////////////////////////////////////////////////

  const updatePhoneNumber = (id, newPhoneNumber) => {
    if (window.confirm(`Voulez-vous vraiment mettre à jour le numéro de téléphone de l'utilisateur avec l'ID ${id}?`)) {
      axios.put(`/api/directory/${id}`, { phoneNumber: newPhoneNumber })
        .then(response => {
          setDirectory(prevDirectory => prevDirectory.map(person => {
            if (person.id === id) {
              return { ...person, phoneNumber: newPhoneNumber };
            }
            return person;
          }));
        })
        .catch(error => {
          console.error(error);
          setErrorMessage(
            `Note '${note.content}' was already removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNotes(notes.filter(n => n.id !== id))
        });
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
      <form onSubmit={updatePhoneNumber}>

      <Notification message={errorMessage} />
      <DisplayForms />
      <br />
      <DisplayInputSearch />
      <DisplayPhone />

      <li className='note'>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>

      <button type="submit">Add</button>
      </form>
    </div>
  );


export default App;