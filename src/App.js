import React, { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([
    { name: 'test', number: '123' },
    { name: 'test', number: '123' },
  ]);

  const addContact = () => {
    setContacts([...contacts, { name: 'gabriel', number: 'charib' }]);
  };

  return (
    <div>
      <h2>Phone Directory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addContact}>Add</button>
    </div>
  );
};

export default App