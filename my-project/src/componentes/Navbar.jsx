import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="flex gap-4 text-white text-xl">
            <Link className="hover:text-first-color font-body text-base" to="/">Inicio</Link>
            <Link className="hover:text-first-color font-body text-base" to="Programs">Programas</Link>
            <Link className="hover:text-first-color font-body text-base" to="/Contact">Contactanos</Link>
        </nav>
    )
}
export default Navbar