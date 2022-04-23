import './App.css';
import Form from './components/Form';
import People from './components/People';

function App() {
  return (
    <div className="container">
      <div className="row my-3">
        <h3><i className="bi bi-server"></i> Gestión de personal universitario</h3>
      </div>
      <div className='row mb-3'>
        <div className='card p-0'>
          <div className='card-header bg-dark text-white'>
            <h5><i className="bi bi-person-plus-fill"></i> Agregar persona</h5>
          </div>
          <div className='card-body'>
            <Form />
          </div>
        </div>
      </div>
      <hr className='border border-dark my-4' />
      <div className='row mb-3'>
        <h4><i className="bi bi-person-lines-fill"></i> Listado de personas</h4>
      </div>
      <People />
    </div>
  );
}

export default App;
