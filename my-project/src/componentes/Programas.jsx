import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Programas = () => {

    const [searchName, setSearchName] = useState("");
    const [searchGenero, setSearchGenero] = useState("");
  
    const handleNameChange = (e) => {
      setSearchName(e.target.value);
    };
  
    const handleGeneroChange = (e) => {
      setSearchGenero(e.target.value);
    };
  
  
    const programasGimnasio = [
      {
        nombre: "Musculación",
        imagen: "https://player.vimeo.com/progressive_redirect/playback/456103329/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=029d1c6f379749c3441cd33958dfa027faf32bcb8df18496836f916bb8d56f70",
        precio: 6000,
        ejercicios: ["levantamiento de pesas", "entrenamiento de fuerza"],
        dias: ["Lunes", "Miércoles", "Viernes"],
        hora: "18:00",
        tipoEntrenamiento: "Fuerza"
      },
      {
        nombre: "Crossfit",
        imagen: "https://player.vimeo.com/progressive_redirect/playback/496706270/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=928908b5ee9237bcb95f53b9cf717db7c7f7a8aae325eb8359f89cdc711a7869",
        precio: 7000,
        ejercicios: ["levantamiento olímpico", "entrenamiento metabólico"],
        dias: ["Lunes", "Martes", "Jueves", "Viernes"],
        hora: "17:30",
        tipoEntrenamiento: "Funcional"
      },
      {
        nombre: "Yoga",
        imagen: "https://player.vimeo.com/progressive_redirect/playback/353347126/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=3b394a800cb94de6bb325d3ac05ac5de2424f094fdca9f1a5b7fd388976c6f1f",
        precio: 5000,
        ejercicios: ["asanas", "pranayama", "meditación"],
        dias: ["Martes", "Jueves", "Sábado"],
        hora: "09:00",
        tipoEntrenamiento: "Flexibilidad"
      },
      {
        nombre: "Gap (Glúteos, Abdominales, Piernas)",
        imagen: "https://player.vimeo.com/progressive_redirect/playback/674700521/rendition/360p?loc=external&oauth2_token_id=57447761&signature=27ddbe079fd8c36c5e4c3386fbd2f696b394ab79e87fe2ac283c1ce42b300730",
        precio: 5500,
        ejercicios: ["ejercicios específicos para glúteos, abdominales y piernas"],
        dias: ["Miércoles", "Viernes"],
        hora: "16:00",
        tipoEntrenamiento: "Resistencia"
      },
      {
        nombre: "Pilates",
        imagen: "https://player.vimeo.com/progressive_redirect/playback/509287291/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=e9cfac47a610bd089c0b4de4cc541fb30c604d9e2fc55ea098a4f5f3b1e3bdd5",
        precio: 6000,
        ejercicios: ["ejercicios de control muscular", "respiración", "flexibilidad"],
        dias: ["Lunes", "Miércoles", "Viernes"],
        hora: "10:30",
        tipoEntrenamiento: "Flexibilidad"
      },
      {
        nombre: "Dance",
        imagen: "https://player.vimeo.com/progressive_redirect/playback/395925490/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=1d89aad43dac6092d50bffdb7cf7e8b54ea4e27c42c486a59fa1bac969674575",
        precio: 5500,
        ejercicios: ["baile aeróbico", "coreografías"],
        dias: ["Martes", "Jueves", "Sábado"],
        hora: "19:00",
        tipoEntrenamiento: "Velocidad"
      },
      {
        nombre: "Kick Boxing",
        imagen: "https://player.vimeo.com/progressive_redirect/playback/435487605/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=52c5c556057c05f8d3fb55e297b419115026af51720dd55351f543224386c90b",
        precio: 7500,
        ejercicios: ["técnicas de boxeo y patadas", "acondicionamiento físico"],
        dias: ["Lunes", "Miércoles", "Viernes"],
        hora: "20:00",
        tipoEntrenamiento: "Fuerza"
      },
      {
        nombre: "Boxeo",
        imagen: "https://player.vimeo.com/progressive_redirect/playback/420459070/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=3f9fe47232f47fc9aa0568ad55d14dcfd1abf08b918f1bbc8b1eabb67f724e95",
        precio: 7000,
        ejercicios: ["técnicas de golpeo", "defensa", "condicionamiento"],
        dias: ["Martes", "Jueves", "Sábado"],
        hora: "18:30",
        tipoEntrenamiento: "Fuerza"
      }
    ];
  
    const filteredProgramas = programasGimnasio.filter(programa => {
      return (
        programa.nombre.toLowerCase().includes(searchName.toLowerCase()) &&
        (searchGenero === "" || programa.tipoEntrenamiento.toLowerCase().includes(searchGenero.toLowerCase()))
      );
    });

    return (
        <div className="text-primary uppercase font-primary shadow-lg sticky top-0">
            <h1 className='text-3xl text-white font-body font-bold'>FitZone</h1>
            <Link className="bg-first-color-alt p-2 text-center lg:h-[40px] lg:mr-4 lg:mt-4 font-body font-bold text-white hover:bg-first-color" to="/">Inicio</Link>
            <Link className="bg-first-color-alt p-2 text-center lg:h-[40px] lg:mr-4 lg:mt-4 font-body font-bold text-white hover:bg-first-color" to="/Contact">Contactanos</Link>
            <main>
                <div className="flex flex-col justify-center mt-10">
                    <div className="flex flex-col items-center xl:flex xl:flex-row justify-center gap-10">
                        <select className="w-[200px] p-1 font-body font-bold" onChange={handleGeneroChange}>
                            <option value="">Todos los tipos</option>
                            <option value="fuerza">Fuerza</option>
                            <option value="funcional">Funcional</option>
                            <option value="flexibilidad">Flexibilidad</option>
                            <option value="resistencia">Resistencia</option>
                            <option value="velocidad">Velocidad</option>
                        </select>
                        <input
                            className="w-[200px] p-1"
                            type="text"
                            placeholder="Buscar por nombre"
                            value={searchName}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                        {filteredProgramas.map((programa, index) => (
                            <div key={index} className="mb-4 flex flex-col justify-between">
                                <video
                                    controls
                                    src={programa.imagen}
                                    className="w-full h-auto"
                                />
                                <ul className="mt-4 text-white font-body">
                                    <li><strong>Nombre:</strong> {programa.nombre}</li>
                                    <li><strong>Precio:</strong> {programa.precio}</li>
                                    <li><strong>Días:</strong> {programa.dias.join(", ")}</li>
                                    <li><strong>Hora:</strong> {programa.hora}</li>
                                    <li><strong>Tipo de Entrenamiento:</strong> {programa.tipoEntrenamiento}</li>
                                </ul>
                                <button className="bg-first-color-alt font-body text-white text-xl p-2 hover:bg-first-color">COMPRAR</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Programas