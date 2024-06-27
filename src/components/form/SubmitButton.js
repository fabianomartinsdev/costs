import styles from "./SubmitButton.module.css";

function SubmitButton({ type, text, onClick }) {
  return (
    <div>
      <button className={styles.btn} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
