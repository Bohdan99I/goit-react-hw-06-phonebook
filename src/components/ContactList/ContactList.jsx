import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlise';
import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactButton,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactsList);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListWrapper>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id}>
          <div>
            <ContactName>{contact.name}:</ContactName>
            <p>{contact.number}</p>
          </div>
          <ContactButton
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ContactButton>
        </ContactListItem>
      ))}
    </ContactListWrapper>
  );
};