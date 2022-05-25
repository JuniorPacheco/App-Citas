import {useState, useEffect} from 'react';
import Error from './Error';


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString();
    return fecha + random;
  }

  const envioFormulario = e => {
    e.preventDefault();

    if( [nombre, propietario, email, fecha, sintomas].includes('') ){

      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500)

    }else{
      setError(false);

      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas
      }

      if(paciente.id){
        // Editando registro
        objetoPaciente.id = paciente.id;

        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );
        setPacientes(pacientesActualizados);
        setPaciente({});        
      }else {
        // Nuevo registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);

      }

      //Reiniciar el form 

      setNombre(''); setPropietario(''); setEmail(''); setFecha(''); setSintomas('');
    }
  }


  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
      className="bg-slate-700 rounded-md font-bold mt-2 uppercase py-10 px-8 mb-10"
      onSubmit={envioFormulario}
      >
        {error && <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>}

        <div className="mb-5">
          <label htmlFor="mascota" className="block">
            Nombre Mascota
          </label>

          <input 
          id="mascota"
          type="text"
          placeholder="Nombre de la mascota"
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500 text-black"
          value={nombre}
          onChange={(e)=> setNombre(e.target.value) }
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
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500 text-black"
          value={propietario}
          onChange={(e)=> setPropietario(e.target.value) }
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
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500 text-black"
          value={email}
          onChange={(e)=> setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block">
            Fecha de Alta
          </label>

          <input 
          id="alta"
          type="date"
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500 text-black"
          value={fecha}
          onChange={(e)=> setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block">
            Sintomas
          </label>

          <textarea 
          id="sintomas" 
          placeholder="Describe los síntomas"
          className="border-2 border-gray-300 mt-3 p-2 w-full rounded-md placeholder-gray-500 text-black" 
          value={sintomas}
          onChange={(e)=> setSintomas(e.target.value) }
          />
        </div>

        <input 
        type="submit"
        className="bg-indigo-600 w-full p-3 uppercase text-white rounded-sm hover:bg-indigo-700 cursor-pointer transition-colors"
        value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}
         />

      </form>
    </div>
  )
}

export default Formulario