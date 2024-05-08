import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    return (
        <nav className="flex flex-col items-center lg:flex lg:flex-row gap-4 text-white text-xl">
            <Link className="hover:text-first-color font-body text-base" to="/">Inicio</Link>
            <Link className="hover:text-first-color font-body text-base" to="Programas">Programas</Link>
            <Link className="hover:text-first-color font-body text-base" to="/Contacto">Contactanos</Link>
            <Link className="hover:text-first-color font-body text-base flex items-center" to="/Carrito">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Carrito
            </Link>
        </nav>
    )
}
export default Navbar