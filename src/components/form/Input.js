import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor="">{text}:</label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Input;
