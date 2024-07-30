import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

import css from "../Contact/Contact.module.css";
export default function Contact({ data: { id, number, name }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p>
          <RiContactsFill size={20} />
          {name}
        </p>
        <p>
          <FaPhone size={20} />
          {number}
        </p>
      </div>

      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
