import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ items, onDelete }) {
  return (
    <div className={css.conteiner}>
      <h3>PhoneBook</h3>
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id}>
            <Contact data={item} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
