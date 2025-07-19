import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Registro } from "../Pages/Registro";
import { Buscar } from "../Pages/Buscar";
import { Configurar } from "../pages/Configurar";
import { Proximos } from "../pages/Proximos";
import { Reportes } from "../pages/Reportes";
import { Login } from "../Pages/Login";
import { TestBackend } from "../components/TestBackend";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Registro" element={<Registro />} />
      <Route path="/Buscar" element={<Buscar />}></Route>
      <Route path="/Configurar" element={<Configurar />}></Route>
      <Route path="/Proximos" element={<Proximos />}></Route>
      <Route path="/Reportes" element={<Reportes />}></Route>
      <Route path="/TestBackend" element={<TestBackend />} />
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};
