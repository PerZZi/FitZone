import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const FormularioConsulta = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Puedes agregar lógica para enviar datos a un servidor aquí si es necesario.

        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
            text: 'Gracias por tu consulta. Nos pondremos en contacto contigo pronto.',
        });

        // Limpiar el formulario
        setFormData({
            nombre: '',
            email: '',
            mensaje: '',
        });
    };

    return (

        <section className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/2">
                <video className="h-full w-full object-cover"
                    src="src/videos/registro.mp4" autoPlay muted loop></video>
            </div>
            <div className="flex-1 p-8 rounded shadow-md md:w-1/2 gap-4">
                <h2 className="text-4xl text-white font-body font-bold mb-2">Déjanos tu consulta</h2>
                <form className="border-none flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                    <label htmlFor="nombre" className="text-sm font-body font-bold text-gray-700 mb-2">Nombre:</label>
                    <input
                        className="border border-gray-300 p-2 w-full"
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />

                    <label htmlFor="email" className="text-sm font-body font-bold text-gray-700 mb-2">Correo Electrónico:</label>
                    <input
                        className="border border-gray-300 p-2 w-full"
                        type="email"
                        name="email"
                        placeholder="correo@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="mensaje" className="text-sm font-body font-bold text-gray-700 mb-2">Mensaje:</label>
                    <textarea
                        className="border border-gray-300 p-2 w-full h-40"
                        name="mensaje"
                        placeholder="Consulta"
                        value={formData.mensaje}
                        onChange={handleChange}
                    ></textarea>

                    <div>
                        <button
                            className="bg-first-color-alt text-white py-2 px-4 w-[120px] font-body font-bold hover:bg-first-color"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
            <Link className="bg-first-color-alt p-2 text-center lg:h-[40px] lg:mr-4 lg:mt-4 font-body font-bold text-white hover:bg-first-color" to="/">Inicio</Link>
        </section>
    )
}
export default FormularioConsulta