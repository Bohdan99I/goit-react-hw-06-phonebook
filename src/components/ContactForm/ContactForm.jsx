import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlise';
import { Form, FormLabel, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contactsList);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const lowerCaseName = name.toLowerCase();

    if (contacts.some(item => item.name.toLowerCase() === lowerCaseName)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};