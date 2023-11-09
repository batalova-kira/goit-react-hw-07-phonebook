import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/Contactlist';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
};
