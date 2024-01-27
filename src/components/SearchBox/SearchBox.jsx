import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.container}>
      <input
        className={css.input}
        value={value}
        onChange={event => onChange(event.target.value)}
      ></input>
    </div>
  );
};
