import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';

export const Contact = ({ item, onDelete }) => {
  return (
    <li className={css.item}>
      <h2 className={css.text}>
        <RxAvatar size={26} />
        {item.name}
      </h2>
      <p className={css.text}>
        <FaPhoneAlt size={16} />
        {item.number}
      </p>
      <button className={css.button} type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};
