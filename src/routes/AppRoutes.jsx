import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Registro } from "../Pages/Registro";
import { Buscar } from "../Pages/Buscar";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/Buscar" element={<Buscar />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};
