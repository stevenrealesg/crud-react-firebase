function Form() {
    return (
        <form>
            <fieldset className="row">
                <legend>Datos personales</legend>
                <div className="col-md-4">
                    <div className="mb-3">
                        <label className="form-label">Documento</label>
                        <input className="form-control" name="dni" type="text" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Fecha de nacimiento</label>
                        <input className="form-control" name="dateBirth" type="date" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input className="form-control" name="name" type="text" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tipo</label>
                        <select className="form-select" name="type">
                            <option defaultValue></option>
                            <option value="teacher">Profesor</option>
                            <option value="student">Estudiante</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input className="form-control" name="lastname" type="text" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input className="form-control" name="email" type="email" />
                    </div>
                </div>
            </fieldset>
            <hr className='border border-secondary' />
            <fieldset className="row">
                <legend>Datos de acceso</legend>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input className="form-control" name="user" type="text" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input className="form-control" name="password" type="password" />
                    </div>
                </div>
            </fieldset>
            <div className="d-flex justify-content-end">
                <input className="btn btn-dark" type="submit" value="Guardar"/>
            </div>
        </form>
    );
}

export default Form;