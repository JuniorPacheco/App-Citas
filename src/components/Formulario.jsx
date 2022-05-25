const Formulario = () => {
  return (
    <div className="mx-2 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-slate-700 rounded-md font-bold mt-2 uppercase py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="mascota" className="block">
            Nombre Mascota
          </label>

          <input 
          id="mascota"
          type="text"
          placeholder="Nombre de la mascota"
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block">
            Nombre propietario
          </label>

          <input 
          id="propietario"
          type="text"
          placeholder="Nombre del Propietario"
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block">
            Email
          </label>

          <input 
          id="email"
          type="email"
          placeholder="Email Contacto Propietario"
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block">
            Fecha de Alta
          </label>

          <input 
          id="alta"
          type="date"
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block">
            Sintomas
          </label>

          <textarea 
          id="sintomas" 
          placeholder="Describe los síntomas"
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500"
          />
        </div>

        <input 
        type="submit"
        className="bg-indigo-600 w-full p-3 uppercase text-white rounded-sm hover:bg-indigo-700 cursor-pointer transition-colors"
        value="Agregar Paciente"
         />

      </form>
    </div>
  )
}

export default Formulario