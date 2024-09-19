import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div className='flex justify-between py-3'>
      <Link to="clientesFormpage">
        <h1 className='font-bold text-3xl mb-4 hover:text-blue-500'>Crear Cliente</h1>
      </Link>
      <Link to="clientespage">
        <h1 className='font-bold text-3xl mb-4 hover:text-blue-500'>Listar Clientes</h1>
      </Link>
      <Link to="serviciosFormPage">
        <h1 className='font-bold text-3xl mb-4 hover:text-blue-500'>Crear Servicio</h1>
      </Link>
      <Link to="serviciosPage">
        <h1 className='font-bold text-3xl mb-4 hover:text-blue-500'>Listar Servicios</h1>
      </Link>
    </div>
  );
}
