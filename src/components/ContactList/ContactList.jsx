import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";
export default function ContactList({ contacts, onDelite }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelit={onDelite} />
        </li>
      ))}
    </ul>
  );
}