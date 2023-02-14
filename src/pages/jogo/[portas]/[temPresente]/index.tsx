import Porta from '../../../../../components/porta';
import { useEffect, useState } from 'react';
import { atualizarPortas, criarPortas } from '../../../../../functions/portas';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './index.module.css';

function Jogo() {
  const router = useRouter();
  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    const qtddPortasValida = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;

    setValido(qtddPortasValida && temPresenteValido);
  }, [portas, router.query]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  function renderPortas() {
    return portas.map((porta) => (
      <Porta
        key={porta.numero}
        value={porta}
        onChange={(novaPorta) => setPortas(atualizarPortas(portas, novaPorta))}
      />
    ));
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>{valido ? renderPortas() : <h2>Valores Inválidos</h2>}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}

export default Jogo;
