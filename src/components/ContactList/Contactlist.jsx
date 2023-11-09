import ContactCard from 'components/ContactCard/ContactCard';
import React from 'react';
import { ContactItem, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(item => (
        <ContactItem key={item.id}>
          <ContactCard contact={item} />
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
