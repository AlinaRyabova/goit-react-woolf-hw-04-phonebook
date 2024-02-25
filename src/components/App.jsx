import React, { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = storedContacts ? JSON.parse(storedContacts) : [];
    return [...initialContacts, ...parsedContacts];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = useCallback(
    (name, number) => {
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`${name} is already in contacts.`);
        return;
      }

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts(prevContacts => [newContact, ...prevContacts]);
    },
    [contacts]
  );

  const deleteContact = useCallback(contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </>
  );
};

export default App;
