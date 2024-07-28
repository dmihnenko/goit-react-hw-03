import css from "../ContactForm/ContactForm.module.css";
import { nanoid } from "nanoid";

export default function Form({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };

  return (
    <>
      <h3>test form React</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="number" />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
