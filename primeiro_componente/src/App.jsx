import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatusAluno from './component/StatusAluno'

function App() {

  return (
    <main>
      <StatusAluno
        nome="Marcelo"
        nota={8}

      />
    </main>
  )
}

export default App
