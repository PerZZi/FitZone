import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Actividades = () => {

    const categorias = [
        {
            imagen: "https://media.revistagq.com/photos/63bffaa2cf946a6d514dbad6/16:9/w_2560%2Cc_limit/1181949301",
            nombre: "Fuerza"
        },
        {
            imagen: "https://media.revistagq.com/photos/6502d384c229ad9fcd8fd617/16:9/w_7792,h_4383,c_limit/1346355865",
            nombre: "Velocidad"
        },
        {
            imagen: "https://suelosport.com/wp-content/uploads/2023/10/entrenamiento-funcional-Suelosport.jpg",
            nombre: "Funcional"
        },
        {
            imagen: "https://fotos.perfil.com/2023/08/09/trim/1280/720/boxeo-1627683.jpg",
            nombre: "Resistencia"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true, // Autoplay activado
        autoplaySpeed: 1500, // Velocidad de autoplay en milisegundos
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (

        <section className='mt-40 lg:mt-20'>
        <h2 className="flex justify-center text-4xl text-white font-body font-bold mb-4">PROGRAMAS</h2>
        <div className='mx-10'>
            <Slider {...settings}>
                {categorias.map((categoria) => (
                    <div key={categoria.nombre} className=''>
                        {categoria.imagen && (
                            <img src={categoria.imagen} alt={`Programa ${categoria.nombre}`} className="w-full h-[300px] lg:w-[95%] lg:h-50 rounded-md object-cover" />
                        )}
                        <p className="text-center text-xl text-white font-body font-bold ">{categoria.nombre}</p>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
    )
}
export default Actividades