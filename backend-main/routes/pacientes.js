const express = require("express");
const router = express.Router();
const db = require("../db/vacunas.db");

router.post("/", (req, res) => {
  const {
    tipo,
    nombre_nino,
    apellido_nino,
    fecha_nacimiento,
    sexo,
    nombre_padre,
    apellido_padre,
    direccion,
    telefono,
  } = req.body;

  const sql = `INSERT INTO pacientes 
    (tipo, nombre_nino, apellido_nino, fecha_nacimiento, sexo, nombre_padre, apellido_padre, direccion, telefono) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(
    sql,
    [
      tipo,
      nombre_nino,
      apellido_nino,
      fecha_nacimiento,
      sexo,
      nombre_padre,
      apellido_padre,
      direccion,
      telefono,
    ],
    function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Error al guardar el paciente" });
      }
      res.json({ message: "Paciente guardado", id: this.lastID });
    }
  );
});

module.exports = router;
