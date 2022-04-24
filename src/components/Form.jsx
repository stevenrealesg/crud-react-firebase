import { useState } from "react";
import { save } from "../services/people"

function Form() {
    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birth, setBirth] = useState("")
    const [type, setType] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleChangeDni = ({ target }) => setDni(target.value)
    const handleChangeName = ({ target }) => setName(target.value)
    const handleChangeLastName = ({ target }) => setLastName(target.value)
    const handleChangeBirth = ({ target }) => setBirth(target.value)
    const handleChangeType = ({ target }) => setType(target.value)
    const handleChangeEmail = ({ target }) => setEmail(target.value)
    const handleChangeUser = ({ target }) => setUser(target.value)
    const handleChangePassword = ({ target }) => setPassword(target.value)

    const validateFields = () => {
        if (!dni.trim()) {
            return "Debe ingresar el documento."
        }

        if (!name.trim()) {
            return "Debe ingresar el nombre."
        }

        if (!lastName.trim()) {
            return "Debe ingresar el apellido."
        }

        if (!birth.trim()) {
            return "Debe ingresar una fecha de nacimiento válida."
        }

        if (!type.trim()) {
            return "Debe seleccionar un tipo."
        }

        if (!email.trim()) {
            return "Debe ingresar un correo válido."
        }

        if (!user.trim()) {
            return "Debe ingresar un usuario"
        }

        if (!password.trim()) {
            return "Debe ingresar una contraseña"
        }

        return null
    }

    const handleSubmitSave = async (e) => {
        e.preventDefault()
        const error = validateFields()
        setError(error)
        if (!error) {
            const saved = await save({
                dni,
                name,
                lastName,
                birth,
                type,
                email,
                user,
                password
            })
            if (!saved) setError("Error al guardar la persona.")
            resetForm(e)
        }
    }

    const resetForm = (e) => {
        e.target.reset()
        setDni("")
        setName("")
        setLastName("")
        setBirth("")
        setType("")
        setEmail("")
        setUser("")
        setPassword("")
    }

    return (
        <div className='card p-0'>
            <div className='card-header bg-dark text-white'>
                <h5><i className="bi bi-person-plus-fill"></i> Agregar persona</h5>
            </div>
            <form onSubmit={handleSubmitSave}>
                <div className='card-body'>
                    <fieldset className="row">
                        <legend>Datos personales</legend>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">Documento</label>
                                <input className="form-control" name="dni" type="text" onChange={handleChangeDni} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Fecha de nacimiento</label>
                                <input className="form-control" name="dateBirth" type="date" onChange={handleChangeBirth} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input className="form-control" name="name" type="text" onChange={handleChangeName} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tipo</label>
                                <select className="form-select" name="type" onChange={handleChangeType}>
                                    <option defaultValue></option>
                                    <option value="teacher">Profesor</option>
                                    <option value="student">Estudiante</option>
                                    <option value="student">Asistente</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">Apellido</label>
                                <input className="form-control" name="lastname" type="text" onChange={handleChangeLastName} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo</label>
                                <input className="form-control" name="email" type="email" onChange={handleChangeEmail} />
                            </div>
                        </div>
                    </fieldset>
                    <hr className='border border-secondary' />
                    <fieldset className="row">
                        <legend>Datos de acceso</legend>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Usuario</label>
                                <input className="form-control" name="user" type="text" onChange={handleChangeUser} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input className="form-control" name="password" type="password" onChange={handleChangePassword} />
                            </div>
                        </div>
                    </fieldset>
                </div>
                {
                    error &&
                    <div className="alert alert-warning d-flex align-items-center mx-3" role="alert">
                        <i className="bi bi-exclamation-diamond-fill me-2"></i> {error}
                    </div>
                }
                <div className="card-footer bg-white d-flex justify-content-end">
                    <input className="btn btn-dark" type="submit" value="Guardar" />
                </div>
            </form>
        </div>
    );
}

export default Form;