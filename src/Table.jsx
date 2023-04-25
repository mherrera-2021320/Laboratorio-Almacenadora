import React from 'react'

function Table ({ datos, onEdit }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((tbl) => (
                    <tr key={tbl.id}>
                        <td>{tbl.nombre}</td>
                        <td>{tbl.desc}</td>
                        <td>{tbl.date}</td>
                        <td>
                            <button onClick={() => onEdit(tbl)}>Editar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;