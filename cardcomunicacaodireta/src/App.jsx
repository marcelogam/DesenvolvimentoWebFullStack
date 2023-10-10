import './App.css'
import NumAleatorio from './component/NumAleatorio'
import Card1 from './component/Card1'
import Card2 from './component/Card2'
import Veiculos from './component/Veiculos'
import CaracteristicasVeiculos from './component/CaracteristicasVeiculos'

function App() {

  return (
    <>
      <main id='cards'>
        <h1>React: Componentes basicos</h1>
        <NumAleatorio min={2} max={50}></NumAleatorio>
        <Card1 titulo="Ex 1 - Passagem de parametros via props" text="Estou utilizando o react"></Card1>
        <Card2 titulo="Ex 2 - Passar outro componente" text="Geracao de numeros aleatorios">
          <NumAleatorio min={2} max={50}></NumAleatorio>
        </Card2>

        <Veiculos titulo="Veiculos" motor="1.0">
          <CaracteristicasVeiculos motor="Combustao" cambio="Manual" carroceria="sedan"></CaracteristicasVeiculos>
          <CaracteristicasVeiculos motor="Eletrico" cambio="Automatico" carroceria="hatch"></CaracteristicasVeiculos>
        </Veiculos>
      </main>
    </>
  )
}

export default App
