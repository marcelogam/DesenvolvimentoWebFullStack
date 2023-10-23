import {useParams} from 'react-router-dom'; //hook useParam

const Param = (props) => {
  const {id} = useParams();
  
  return (
    <div>
      <h1>Parametros</h1>
      <h2>valor: {id}</h2>
    </div>
     
    )
};

export default Param;