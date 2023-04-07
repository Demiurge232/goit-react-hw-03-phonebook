import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { ContactListUl } from './ContactList.styled';
export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListUl>
      {contacts.map(({ name, id, number }) => (
        <ContactItem
          name={name}
          key={id}
          id={id}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ContactListUl>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    number: PropTypes.string,
  }),
  deleteContact: PropTypes.func,
};
