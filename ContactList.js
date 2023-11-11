import React, { useState } from 'react';

const ContactsList = ({ contacts }) => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchQuery(''); // Reset search when a letter is clicked
  };

  const handleSearchChange = (event) => {
    setSelectedLetter(null); // Reset selected letter when searching
    setSearchQuery(event.target.value.toUpperCase());
  };


  const filteredContacts = selectedLetter  && selectedLetter !== '#'
    ? contacts.filter((contact) => contact.name.toUpperCase().startsWith(selectedLetter))
    : contacts.filter((contact) => contact.name.toUpperCase().includes(searchQuery));

  return (
    <div>
      <h2>Contact List</h2>

      <div>
        <p>Filter by letter:</p>
        {alphabet.split('').map((letter, index) => (
          <button key={index} onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <div>
        <label>Search: </label>
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
      </div>

      <ul>
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            <strong>Name:</strong> {contact.name}, <strong>Phone:</strong> {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
