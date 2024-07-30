import css from "../SearchBox/SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.conteiner}>
      <h3>Search contact by name</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
