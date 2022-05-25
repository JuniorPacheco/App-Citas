import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleElminar = () => {
      const respuestaEliminacion = confirm('¿Estas seguro de eliminar este paciente?');
      respuestaEliminacion ? eliminarPaciente(id) : "";
    }

  return (
    <div className="bg-slate-700 rounded-xl p-8 lg:mt-0 md:my-10">

        <p className="uppercase font-bold case mb-4">
        Nombre: {' '}
        <span className="normal-case font-normal">{nombre}</span>
        </p>

        <p className="uppercase font-bold case mb-4">
        Propietario: {' '}
        <span className="normal-case font-normal">{propietario}</span>
        </p>

        <p className="uppercase font-bold case mb-4">
        Email: {' '}
        <span className="normal-case font-normal">{email}</span>
        </p>

        <p className="uppercase font-bold case mb-4">
        Fecha Alta: {' '}
        <span className="normal-case font-normal">{fecha}</span>
        </p>

        <p className="uppercase font-bold case">
        Sintomas: {' '}
        <span className="normal-case font-normal">{sintomas}</span>
        </p>

        <div className='flex justify-center md:justify-end gap-5 pt-5'>

            <button 
            className='py-2 px-10 bg-indigo-700 hover:bg-indigo-800 rounded-md font-bold uppercase'
            type='button'
            onClick={() => {setPaciente(paciente)}}
            >Editar</button>

            <button 
            className='py-2 px-10 bg-red-700 hover:bg-red-800 rounded-md font-bold uppercase'
            type='button'
            onClick={handleElminar}
            >Eliminar</button>

        </div>

    </div>
  )
}

export default Paciente