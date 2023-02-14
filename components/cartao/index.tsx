import styles from './index.module.css';

interface CartaoProps {
  bgColor?: string;
  children?: any;
}

function Cartao(props: CartaoProps) {
  return (
    <div className={styles.cartao} style={{ backgroundColor: props.bgColor ?? '#fff' }}>
      {props.children}
    </div>
  );
}

export default Cartao;
