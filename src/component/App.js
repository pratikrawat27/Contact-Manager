import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Header';
import Contact from './Contact';
import ContactList from './ContactList';


function App() {
  const local_storage_key = 'contacts'
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]); //updating the state
  }

  const removeContactHandler = (id) => {
    const copyOfContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(copyOfContactList);
  }

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(local_storage_key, JSON));
    if (getContacts) setContacts(getContacts);
  }, []) //retrieving

  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(contacts));  //converts a js value to a JSON string 
  }, [contacts]) //storing 

  return (
    <div className='ui container'>
      <Header />
      <Contact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactID={removeContactHandler} key={Contact.id} />
    </div>
  );
};

export default App; 
