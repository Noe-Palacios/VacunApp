import { useState } from "react";
import registros from "@/data/registro.json";

export const Buscar = () => {
  const [busqueda, setBusqueda] = useState("");

  const filtrarDatos = registros.filter((registro) =>
    Object.values(registro).some((valor) =>
      String(valor).toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  return (
    <>
      <h1>Buscar</h1>

      <div className="container mt-5">
        <div className="card p-4">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Sexo</th>
                  <th>Cédula</th>
                  <th>Dirección</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {filtrarDatos.length > 0 ? (
                  filtrarDatos.map((reg, index) => (
                    <tr key={index}>
                      <td>{reg.nombre}</td>
                      <td>{reg.apellido}</td>
                      <td>{reg.fechaNacimiento}</td>
                      <td>{reg.sexo}</td>
                      <td>{reg.cedula}</td>
                      <td>{reg.direccion}</td>
                      <td>{reg.telefono}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No se encontraron resultados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
