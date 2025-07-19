const express = require("express");
const cors = require("cors");
const pacientesRoutes = require("./routes/pacientes");
const test = require("./routes/test");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/pacientes", pacientesRoutes);
// endpoint para verificar el estado del backend
// Este endpoint es útil para pruebas y monitoreo
app.use("/api/test", test);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
