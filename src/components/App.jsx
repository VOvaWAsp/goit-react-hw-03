import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';

const visibleContacts = [];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = JSON.parse(window.localStorage.getItem('saveContact'));
    if (saveContacts !== null) {
      return saveContacts;
    }
    return visibleContacts;
  });
  const [nameFilter, setNameFilter] = useState('');

  const addContacts = newContacts => {
    setContacts(contacts => {
      return [...contacts, newContacts];
    });
  };

  const deleteContacts = contactsId => {
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== contactsId);
    });
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  useEffect(() => {
    window.localStorage.setItem('saveContact', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={nameFilter} onChange={setNameFilter} />
      <ContactList items={filterContacts} onDelete={deleteContacts} />
    </div>
  );
};
