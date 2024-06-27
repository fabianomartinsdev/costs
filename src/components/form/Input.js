import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor="">{text}</label>
      <input
        className={`${styles.input}`}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default Input;
