function Person() {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <i className="bi bi-person" style={{ fontSize: "50px" }}></i>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mb-0 text-truncate">Nombre Apellido</h5>
                        <p className="card-text m-0 text-truncate"><i className="bi bi-card-heading"></i> 1234567890</p>
                        <p className="card-text m-0 text-truncate"><i className="bi bi-balloon"></i> 1996/12/18</p>
                        <p className="card-text m-0 text-truncate"><i className="bi bi-at"></i> correo@algo.com</p>
                        <p className="card-text m-0 text-truncate"><i className="bi bi-person-workspace"></i> user123</p>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <button className="btn btn-primary rounded-0 flex-fill">Editar</button>
                <button className="btn btn-danger rounded-0 flex-fill">ELiminar</button>

            </div>
        </div>
    );
}

export default Person;