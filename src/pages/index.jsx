import Porta from 'components/porta';
import { useState } from 'react';
import PortaModel from '../../model/porta';
import { atualizarPortas, criarPortas } from '../../functions/portas';

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 2));

  function renderPortas() {
    return portas.map((porta) => (
      <Porta
        key={porta.numero}
        value={porta}
        onChange={(novaPorta) => setPortas(atualizarPortas(portas, novaPorta))}
      />
    ));
  }

  return <div style={{ display: 'flex' }}>{renderPortas()}</div>;
}
