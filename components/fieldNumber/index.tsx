import styles from './index.module.css';

interface FieldNumber {
  name: string;
  onChange: (newValue: number) => void;
  text: string;
  value: number;
}

function FieldNumber(props) {
  const decrement = () => props.onChange(props.value - 1);
  const increment = () => props.onChange(props.value + 1);

  return (
    <div className={styles.fieldNumber}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.botoes}>
        <button className={styles.button} disabled={props.value === 0} onClick={decrement}>
          -
        </button>
        <button className={styles.button} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default FieldNumber;
