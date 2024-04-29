
const Seccion = () => {

    return (

        <section className="flex justify-center">
            <div className="w-1/2">
                <img className="h-[400px] w-full" src="/src/imagenes/EntrenamientoBanner.jpg" alt="" />
            </div>
            
            <div className="h-[400px] w-1/2 bg-letrasColor flex flex-col justify-center items-center gap-4">
            <h2 className="text-primary uppercase font-primary font-bold text-4xl leading-[1.2em]">Un mismo mismo plan,</h2>
            <h2 className="text-primary uppercase font-primary font-bold text-4xl leading-[1.2em]">un montón de opciones</h2>
            <p className="text-xl text-center">¡Cada gimnasio, tiene una propuesta diferente, y contas con la posibilidad de elegir y probar el que quieras!</p>
            <button className="bg-black text-xl text-letrasColor p-3 hover:bg-letrasColor hover:text-black hover:border-2 hover:border-black">Incribirse ahora</button>
            </div>
        </section>
    )
}
export default Seccion