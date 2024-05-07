import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './componentes/Inicio'
import FormularioConsulta from './componentes/FormularioConsulta'
import Programas from './componentes/Programas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/Programs' element={<Programas/>} />
      <Route path='/Contact' element={<FormularioConsulta/>} />
      <Route exact path="/Contact" element={<FormularioConsulta/>}/>
    </Routes>
  )
}

export default App
