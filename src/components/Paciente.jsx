import React from 'react'

const Paciente = () => {
  return (
    <div className="bg-slate-700 rounded-xl p-8 mb-3">

        <p className="uppercase font-bold case mb-4">
        Nombre: {' '}
        <span className="normal-case font-normal">Liliana</span>
        </p>

        <p className="uppercase font-bold case mb-4">
        Propietario: {' '}
        <span className="normal-case font-normal">Junior</span>
        </p>

        <p className="uppercase font-bold case mb-4">
        Email: {' '}
        <span className="normal-case font-normal">correo@correo.com</span>
        </p>

        <p className="uppercase font-bold case mb-4">
        Fecha Alta: {' '}
        <span className="normal-case font-normal">1 de Octubre 2022</span>
        </p>

        <p className="uppercase font-bold case">
        Sintomas: {' '}
        <span className="normal-case font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolor tenetur excepturi itaque eius esse minima dolore iste doloribus quaerat maxime 
        consequatur enim omnis officia suscipit consectetur, veniam minus nihil vero.</span>
        </p>

    </div>
  )
}

export default Paciente