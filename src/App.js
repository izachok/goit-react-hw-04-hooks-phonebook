// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v1 as uuid } from 'uuid';

const LOCAL_STORAGE_CONTACTS = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTACTS));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, phoneNumber }) => {
    if (isInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { id: uuid(), name, phoneNumber };
    setContacts(prev => [newContact, ...prev]);
  };

  const isInContacts = name => {
    name = name.toLowerCase();
    return (
      contacts.filter(contact => contact.name.toLowerCase().includes(name))
        .length > 0
    );
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
