import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Phonebook, ContactTitle, TitlePhonebook } from './App.styled';

export const App = () => {
  return (
    <Phonebook>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </Phonebook>
  );
};
