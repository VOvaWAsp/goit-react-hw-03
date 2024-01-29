import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ items, onDelete }) => {
  return (
    <div>
      <ul className={css.container}>
        {items.map(item => {
          return <Contact key={item.id} item={item} onDelete={onDelete} />;
        })}
      </ul>
    </div>
  );
};
