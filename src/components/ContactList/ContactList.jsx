import PropTypes from 'prop-types';
import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactButton,
} from './ContactList.styled';

export const ContactList = ({ visibleContact, deleteContact }) => {
  return (
    <div>
      <ContactListWrapper>
        {visibleContact.map(contact => {
          return (
            <ContactListItem key={contact.id}>
              <div>
                <ContactName>{contact.name}:</ContactName>
                <p>{contact.number}</p>
              </div>
              <ContactButton
                type="button"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </ContactButton>
            </ContactListItem>
          );
        })}
      </ContactListWrapper>
    </div>
  );
};

ContactList.propTypes = {
  vilibleContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};