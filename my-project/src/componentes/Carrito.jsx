import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Carrito = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Guardar el carrito en localStorage cuando cambie el estado
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Eliminar un elemento del carrito
    const removeFromCart = (nombre) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Deseas eliminar este artículo del carrito?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const newCart = cart.filter((item) => item.nombre !== nombre);
                setCart(newCart);
                Swal.fire('Eliminado!', 'El artículo ha sido eliminado del carrito.', 'success');
            }
        });
    };

    // Calcular el precio total
    const total = cart.reduce((sum, item) => sum + item.precio, 0);

    const handlePurchase = () => {
        Swal.fire({
            title: '¿Confirmar compra?',
            text: `El total de la compra es ${total}.`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, comprar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Compra exitosa', `Tu compra se ha realizado con éxito. Total: ${total}`, 'success');
                setCart([]);
            }
        });
      };

    return (

        <div className='flex flex-col items-center gap-4'>
             <Link className="bg-first-color-alt p-2 text-center lg:h-[40px] lg:mr-4 lg:mt-4 font-body font-bold text-white hover:bg-first-color" to="/">Inicio</Link>
            <h1 className='text-3xl text-white font-body font-bold'>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p className='text-2xl text-white font-body font-bold'>No hay elementos en el carrito.</p>
            ) : (
                <>
                    <ul className='text-white font-body font-bold flex flex-wrap gap-4'>
                        {cart.map((item, index) => (
                            <article key={index} className='w-[300px] p-4'>
                                <video
                                    controls
                                    src={item.imagen}
                                    className='w-full h-48 mb-4 rounded-lg'
                                />
                                <h3 className='text-2xl'>{item.nombre}</h3>
                                <p className='text-xl'>Precio: {item.precio}</p>
                                <p className='text-xl'>Días: {item.dias.join(', ')}</p>
                                <p className='text-xl'>Hora: {item.hora}</p>
                                <p className='text-xl'>Tipo de Entrenamiento: {item.tipoEntrenamiento}</p>
                                <button
                                    className='bg-first-color-alt font-body text-white text-xl p-2 hover:bg-first-color mt-4'
                                    onClick={() => removeFromCart(item.nombre)}
                                >
                                    Eliminar
                                </button>
                            </article>
                        ))}
                    </ul>
                    <div className='flex flex-col items-center gap-4'>
                        <h2 className='text-white font-body font-bold'>Precio Total: {total}</h2>
                        <button className='bg-first-color-alt font-body text-white text-xl p-2 hover:bg-first-color' onClick={() => setCart([])}>Vaciar Carrito</button>

                        <button
                            className='bg-first-color-alt font-body text-white text-xl p-2 hover:bg-first-color'
                            onClick={handlePurchase}
                        >
                            Comprar
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
export default Carrito