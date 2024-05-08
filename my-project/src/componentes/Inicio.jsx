import Navbar from '../componentes/Navbar'
import Seccion from '../componentes/Seccion'
import Actividades from '../componentes/Actividades'
import Contacto from '../componentes/Contacto'

const Inicio = () => {

    return (

        <div>

            <header className='h-20 flex justify-around items-center text-primary uppercase font-primary shadow-lg sticky backdrop-blur-lg bg-opacity-50 top-0 z-20 border-b-2 border-first-color-alt'>
                <h1 className='text-3xl text-white font-body font-bold'>FitZone</h1>
                <Navbar />
            </header>

            <main>
                <Seccion />
                <Actividades />
                <br />
                <br />
                <Contacto />
            </main>

        </div>
    )
}
export default Inicio