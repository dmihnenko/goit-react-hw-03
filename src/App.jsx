import data from "./data.json";
import css from "./App.module.css";
import Form from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";

export default function App() {
  const [contacts, setContact] = useState(data);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    console.log("newContact", newContact);
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
      <Form onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList items={visibleContact} onDelete={deleteContact} />
    </div>
  );
}
