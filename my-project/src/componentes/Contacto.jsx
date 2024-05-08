import { Link } from 'react-router-dom';

const Contacto = () => {

    return (
        <section className="flex justify-center">

            <div className="h-[400px] w-1/2 bg-letrasColor flex flex-col justify-center items-center gap-4">
                <h2 className="text-white text-4xl font-body font-bold">Logra tus objetivos</h2>
                <p className="text-white text-xl text-center">Contamos con un staff preparado para asesorarte y darte un seguimiento de manera individualizada.</p>
                <Link to="/Contact" className="bg-first-color-alt font-body font-bold text-white text-xl p-3 hover:bg-first-color">
                    Dejanos tu consulta
                </Link>
            </div>

            <div className="w-1/2">
                <img src="/src/imagenes/coache.png" className="h-[400px] " alt="" />
            </div>

        </section>
    )
}
export default Contacto