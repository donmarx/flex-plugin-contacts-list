import React from 'react';
import ContactsList from './ContactList';

const App = () => {
  const contacts = [
    { name: 'John Doe', phone: '555-1234' },
    { name: 'Jane Doe', phone: '555-5678' },
    { name: 'Mane Doe', phone: '555-5678' },
    { name: 'Bane Doe', phone: '555-5678' },
    // Add more contacts as needed
  ];

  return (
    <div>
      <h1>Agenda</h1>
      <ContactsList contacts={contacts} />
    </div>
  );
};

export default App;
