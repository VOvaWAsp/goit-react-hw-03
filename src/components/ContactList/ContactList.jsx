import { Contact } from '../Contact/Contact';

export const ContactList = ({ items, onDelete }) => {
  return (
    <div>
      <Contact item={items} onDelete={onDelete} />
    </div>
  );
};
