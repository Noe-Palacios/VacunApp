import { useEffect } from "react";
import { useState } from "react";

export const TestBackend = () => {
  const [message, setMessage] = useState("Cargando...");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) =>
        console.error("Error al conectar con el backend ❌", error)
      );
  }, []);

  return (
    <div>
      <h1>Test Backend</h1>
      <p>{message}</p>
      <p>
        Este componente verifica la conexión con el backend y muestra un mensaje
        de estado. Si ves el mensaje de éxito, significa que la conexión es
        correcta. Si ves un error, verifica que el backend esté corriendo en el
        puerto 5000.
      </p>
    </div>
  );
};
