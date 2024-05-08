import Navbar from '../componentes/Navbar'
import Seccion from '../componentes/Seccion'
import Actividades from '../componentes/Actividades'
import Contacto from '../componentes/Contacto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Inicio = () => {

    return (

        <div>

            <header className='h-30 flex flex-col items-center lg:h-20 lg:flex lg:flex-row lg:justify-around lg:items-center text-primary uppercase font-primary shadow-lg sticky backdrop-blur-lg bg-opacity-50 top-0 z-20 border-b-2 border-first-color-alt'>
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

            <footer className='flex flex-col items-center mt-20 gap-10 shadow-lg lg:sticky backdrop-blur-lg bg-opacity-50 bottom-0 z-20 border-t-2 border-first-color-alt'>
                <h3 className='text-2xl text-white text-center font-body font-bold uppercase'>Vení a probar la mejor experiencia en cualquiera de nuestras sedes</h3>
                <div className='flex flex-col gap-20 lg:flex lg:flex-row lg:w-full lg:justify-around lg:gap-10'>

                    <div className='flex flex-col items-center gap-2 text-white font-body font-bold'>
                        <p>SEGUINOS EN</p>
                        <div className='flex items-center gap-2'>
                            <h3>instagram</h3>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className='flex items-center gap-2'>
                            <h3>facebook</h3>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-2 text-white font-body font-bold'>
                        <p>FitZone</p>
                        <p>Encontranos en:</p>
                        <p> Estrada 5986
                            Nva Cba
                            Córdoba</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
export default Inicio