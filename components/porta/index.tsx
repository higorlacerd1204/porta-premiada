import styles from './index.module.css';
import PortaModel from '../../model/porta';

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

function Porta(props: PortaProps) {
  const porta = props.value;
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';
  const alternarSelecao = (event) => props.onChange(porta.alternarSelecao());
  const abrirPorta = (event) => {
    event.stopPropagation();
    props.onChange(porta.abrir());
  };

  const renderPorta = () => (
    <div className={styles.porta}>
      <div className={styles.numero}>{porta.numero}</div>
      <div className={styles.macaneta} onClick={abrirPorta}></div>
    </div>
  );

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.aberta ? null : renderPorta()}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}

export default Porta;
