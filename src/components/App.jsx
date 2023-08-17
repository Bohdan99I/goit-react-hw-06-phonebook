import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper, H2 } from './App.styled';

const contactArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? contactArray
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const lowerCaseName = name.toLowerCase();

    if (contacts.some(item => item.name.toLowerCase() === lowerCaseName)) {
      return alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => {
        return [...prevContacts, contact];
      });
    }
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Wrapper>
      <H2>Phonebook</H2>
      <ContactForm onSubmit={addContact} />

      <H2>Contacts</H2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList
        visibleContact={visibleContacts}
        deleteContact={deleteContact}
      />
    </Wrapper>
  );
};
