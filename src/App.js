import { useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Person from './components/Person';
import { getList } from './services/people';

function App() {
  const getPeople = async () => {
    const data = await getList()
    console.log(data)
  }

  useEffect(() => {
    getPeople()
  }, [])
  return (
    <div className="container">
      <div className="row my-3">
        <h3><i className="bi bi-server"></i> Gestión de personal universitario</h3>
      </div>
      <div className='row mb-3'>
        <Form />
      </div>
      <hr className='border border-dark my-4' />
      <div className='row mb-3'>
        <h4><i className="bi bi-person-lines-fill"></i> Listado de personas</h4>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <Person />
        </div>
      </div>
    </div>
  );
}

export default App;
