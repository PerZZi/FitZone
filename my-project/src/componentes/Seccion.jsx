
const Seccion = () => {

    return (

        <section className="flex flex-col items-center gap-20 lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="w-1/2">
                <img className="w-full" src="/src/imagenes/banner.png" alt="" />
            </div>
            
            <div className="h-[400px] w-1/2 flex flex-col justify-center items-center gap-4">
            <h2 className="text-white text-4xl font-body font-bold">Un mismo mismo plan,</h2>
            <h2 className="text-white text-4xl font-body font-bold">un montón de opciones</h2>
            <p className="text-white text-xl text-center">¡Cada gimnasio, tiene una propuesta diferente, y contas con la posibilidad de elegir y probar el que quieras!</p>
            <button className="bg-first-color-alt font-body font-bold text-white text-xl p-3 hover:bg-first-color">Incribirse ahora </button>
            </div>
        </section>
    )
}
export default Seccion