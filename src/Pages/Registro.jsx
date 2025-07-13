import { useState } from "react";
import "./Registro.css";

export const Registro = () => {
  // Estado de Toggle
  const [isChild, setIsChild] = useState(true);

  return (
    <>
      <h1>Registro</h1>
      <section className="registro-container">
        <header className="registro-header">
          <h2>Área de vacunas</h2>
          <button className="registro-logout">Salir</button>
        </header>

        {/* Toggle */}
        <div className="registro-toggle">
          <button
            className={`toggle-btn ${isChild ? "active" : ""}`}
            onClick={() => setIsChild(true)}
          >
            Niño
          </button>
          <button
            className={`toggle-btn ${!isChild ? "active" : ""} `}
            onClick={() => setIsChild(false)}
          >
            Adulto
          </button>
        </div>

        {/* Formulario */}
        <form className="registro-form">
          {/* Campos */}
          <div className="form-grid">
            <input
              type="text"
              placeholder={isChild ? "Nombre del Niño/a" : "Nombres"}
              className="input-field"
            />
            <input
              type="text"
              placeholder={isChild ? "Apellidos del niño/a" : "Apellidos"}
              className="input-field"
            />
            <input
              type="date"
              placeholder="Fecha de nacimiento"
              className="input-field"
            />
            <select className="input-field">
              <option value="">Sexo</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
            {/* Seccion Niños */}

            {isChild && (
              <>
                {/* Label span-2 */}
                <div className="label-field span-2">
                  Datos del padre, madre o tutor
                </div>
                {/* Inputs de tutor */}
                <input
                  type="text"
                  placeholder="Nombres"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Apellidos"
                  className="input-field"
                />
              </>
            )}
            {!isChild && (
              <input type="text" placeholder="Cédula" className="input-field" />
            )}

            {/* Dirección spans 2 columnas */}
            <input
              type="text"
              placeholder="Dirección"
              className={`input-field ${isChild ? "" : "span-2"}`}
            />
            {/* Remaining single column */}
            <input type="tel" placeholder="Teléfono" className="input-field" />
          </div>

          <button type="submit" className="btn-register">
            Registrar
          </button>

          {/*SUGERENCIA Noe: Implementar useModal cuando se pulse Registrar. que confirme si la informacion es correcta */}
        </form>
      </section>
    </>
  );
};
