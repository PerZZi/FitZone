import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './componentes/Inicio'
import FormularioConsulta from './componentes/FormularioConsulta'
import Programas from './componentes/Programas'
import Carrito from './componentes/Carrito'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/Programas' element={<Programas/>} />
      <Route path='/Contacto' element={<FormularioConsulta/>} />
      <Route exact path="/Contacto" element={<FormularioConsulta/>}/>
      <Route exact path="/Carrito" element={<Carrito/>}/>
    </Routes>
  )
}

export default App
