import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.box}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        id="filter"
        placeholder="Enter name"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        // className={css.onFilter}
      />
    </div>
  );
}
