import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };
  return (
    <div className={css.container}>
      <input className={css.input} value={value} onChange={handleChange}></input>
    </div>
  );
};
