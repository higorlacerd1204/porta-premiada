import Link from 'next/link';
import { use, useState } from 'react';
import Cartao from '../../components/cartao';
import FieldNumber from '../../components/fieldNumber';
import styles from './index.module.css';

export default function Form() {
  const [qtddPortas, setQtddPortas] = useState(3);
  const [comPresente, setcomPresente] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <FieldNumber
            onChange={(novaQntdd) => setQtddPortas(novaQntdd)}
            text="Quantidade de Portas?"
            value={qtddPortas}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <FieldNumber
            onChange={(novaPortaComPresente) => setcomPresente(novaPortaComPresente)}
            text="Porta com Presente?"
            value={comPresente}
          />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link className={styles.iniciar} href={`/jogo/${qtddPortas}/${comPresente}`}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
