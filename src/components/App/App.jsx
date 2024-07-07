import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import InitialContacts from "../../contacts.json";
import { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : InitialContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");
  const AddContact = (NewContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, NewContact];
    });
  };
  const DelitTask = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.wrapper}>
      <h1> Phonebook</h1>
      <ContactForm onAdd={AddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelite={DelitTask} />
    </div>
  );
}
