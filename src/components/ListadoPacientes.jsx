import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="mx-5 md:w-1/2 lg:w-3/5">

      {pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          <div className="md:h-screen md:overflow-y-auto">
            {pacientes.map(paciente => (<Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes {" "}
            <span className="text-indigo-600 font-bold">y Apareceran en Este Lugar</span>
          </p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes
