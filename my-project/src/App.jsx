import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Seccion from './componentes/Seccion'
import Actividades from './componentes/Actividades'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <header className='h-20 flex justify-around items-center text-primary uppercase font-primary'>
        <h1 className='text-3xl text-white'>FitZone</h1>
        <Navbar/>
      </header>

      <main>
        <Seccion/>
        <Actividades/>
      </main>

    </div>
  )
}

export default App
