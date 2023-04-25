import React, { useState } from 'react'
import './css/App.css'

function AppTable( ) {


    const [todos, setTodos] = useState([]);
    const [contador, setContador] = useState(1);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");
    const [datos, setDatos] = useState([]);


    const handleAdder = () => {
        const newAll = `Nombre: ${nombre} ||Descripcion: ${descripcion} ||Fecha: ${fecha}`;
        const nuevaFila = { id: contador, name: nombre, desc: descripcion, date: fecha };
        setTodos([...todos, { todo: newAll, completo: false }]);
        setContador(contador + 1);
        setDatos([...datos, nuevaFila]);
        setNombre("");
        setDescripcion("");
        setFecha("");
    }

    const borrarTodo = (id) => {
        setDatos(datos.filter((todo) => todo.id !== id));
    };



    return (

        <div>

            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                Agregar Nueva Tarea
            </button>
            <br />
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Crear Nueva Tarea</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <label >
                            Agregar Nombre
                            <br />
                            <input className='form-control' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Insertar Nombre' required />
                        </label>
                        <label >
                            <br />
                            Agregar Descripcion
                            <br />
                            <input className='form-control' type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder='Insertar Descripcion' required />
                        </label>
                        <div>
                            <br />
                            <label >
                                Ingresar Fecha
                                <br />
                                <input className='form-control' type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder='Insertar Descripcion' required />
                            </label>
                            <div>
                                <br />
                                <button className='button'
                                    onClick={handleAdder}>
                                    Agregar Tarea</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <br />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> # </th>
                        <th>Nombre</th>
                        <th>Descricpcion</th>
                        <th>Fecha</th>
                        <th> </th>
                    </tr>
                </thead>

                <tbody>
                    {datos.map((tbl) => (
                        <tr key={tbl}>
                            <td>{tbl.id}</td>
                            <td>{tbl.name}</td>
                            <td>{tbl.desc}</td>
                            <td>{tbl.date}</td>
                            dkjsdk
                            <td>
                                <button className='button' onClick={() => borrarTodo(tbl.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )




}

export default AppTable