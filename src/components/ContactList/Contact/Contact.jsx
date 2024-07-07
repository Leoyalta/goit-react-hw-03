import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

export default function Contact({ data: { name, number, id }, onDelit }) {
  return (
    <div className={css.item}>
      <div className={css.box}>
        <p>
          <IoPerson />
          {name}
        </p>
        <p>
          <BsTelephoneFill />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelit(id)}>
        Delite
      </button>
    </div>
  );
}
