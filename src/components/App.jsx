import React from 'react';
import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper, H2 } from './App.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contactsList);
  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrapper>
      <H2>Phonebook</H2>
      <ContactForm />

      <H2>Contacts</H2>
      <Filter />
      <ContactList visibleContact={visibleContacts} />
    </Wrapper>
  );
};