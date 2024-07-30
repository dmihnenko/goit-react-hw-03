import data from "./data.json";
import css from "./App.module.css";
// import FormOld from "./ContactFormOld/ContactForm";
import Form from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useEffect, useState } from "react";

export default function App() {
  const [contacts, setContact] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return data;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts), [contacts]);
  });

  const addContact = (newContact) => {
    setContact((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.wrapper}>
      <Form onAdd={addContact}></Form>
      {/* <FormOld onAdd={addContact} /> */}
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList items={visibleContact} onDelete={deleteContact} />
    </div>
  );
}
