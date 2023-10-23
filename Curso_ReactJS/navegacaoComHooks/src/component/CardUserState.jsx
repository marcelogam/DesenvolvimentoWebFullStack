import "./Card.css"
import { useState } from 'react'

export default function Card(props) {
  const [a, setA] = useState(0);

  /* Atenção a este comentário!
  O número de vezes que um hook é chamado não pode mudar!
  Exemplo a seguir:*/
  //if (a == 1) { useState(); } //Isso é um ERRO!

  const incrementarCounter = () => {
    setA(a + 1);
  };

  //const changeResourceType = (resoureType) ==> {}

  return (
    <div className="Card">
      <div className="Title"><h3>{props.titulo}</h3></div>
      <div className="Content">{props.texto}
        <p><strong>{props.param1}</strong></p>
        <div>
          <input type="number" placeholder="a" value={a}
            onChange={(e) => setA(Number(e.target.value))}>
          </input>
          <button onClick={incrementarCounter}> Incrementar
          </button>
        </div>
      </div>

    </div>
  )
}

