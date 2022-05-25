import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className="mx-2 md:w-1/2 lg:w-3/5">

        <h2 className="font-black text-center text-3xl">Listado pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
        Administra tus {" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <div className="md:h-screen md:overflow-y-scroll">
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>

    </div>
  )
}

export default ListadoPacientes
