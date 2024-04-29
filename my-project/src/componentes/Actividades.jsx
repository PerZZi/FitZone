import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Actividades = () => {

    const entrenamientos = [
        {
            nombre: "Yoga",
            descripcion: "Una disciplina que combina ejercicios físicos, respiración y meditación para mejorar la flexibilidad y reducir el estrés.",
            categoria: "Bienestar"
        },
        {
            nombre: "Zumba",
            descripcion: "Una clase de fitness que combina baile y ejercicio aeróbico al ritmo de música latina y pop.",
            categoria: "Cardio"
        },
        {
            nombre: "Boxeo",
            descripcion: "Un deporte de combate donde los participantes usan guantes y técnicas de golpeo para competir.",
            categoria: "Deporte de combate"
        },
        {
            nombre: "Musculación",
            descripcion: "Un tipo de entrenamiento centrado en el desarrollo de la fuerza y el tamaño muscular mediante pesas y ejercicios de resistencia.",
            categoria: "Fuerza"
        },
        {
            nombre: "Karate",
            descripcion: "Una arte marcial japonesa centrada en el uso de golpes, patadas y bloqueos para defensa y ataque.",
            categoria: "Artes marciales"
        }
    ]

    const settings = {
        dots: true, // Muestra puntos de navegación
        infinite: true, // Desplazamiento infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 3, // Número de slides a mostrar
        slidesToScroll: 1, // Número de slides a desplazar
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Cambia a 2 slides para pantallas medianas
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Cambia a 1 slide para pantallas pequeñas
                },
            },
        ],
    };

    return (

        <section className="mt-40 lg:mt-20">
            <div className='mx-10'>
            <Slider {...settings}>
                {entrenamientos.map((entrenamiento, index) => (
                    <article
                        key={index}
                        className="bg-letrasColor rounded-md object-cover"
                    >
                        <h3 className="text-center text-xl">{entrenamiento.nombre}</h3>
                        <p className="text-gray-600">{entrenamiento.descripcion}</p>
                    </article>
                ))}
            </Slider>
            </div>
        </section>
    )
}
export default Actividades