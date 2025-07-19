export const Login = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div
          className="text-center"
          style={{ width: "100%", maxWidth: "330px", padding: "15px" }}
        >
          {/* Icono tipo Bootstrap */}

          {
            <div className="mb-4">
              <div
                className="rounded-circle bg-purple text-white d-inline-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  fontSize: "30px",
                }}
              >
                VacunApp
              </div>
            </div>
          }

          <h1 className="h3 mb-3 fw-normal">Por favor, Logearse</h1>

          <form>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            {/* bug de ojo desaparece si das click afuera */}

            <div className="checkbox mb-3 text-start">
              <label>
                <input type="checkbox" value="remember-me" /> Recordar
                Contraseña
              </label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; VacunApp 2025</p>
          </form>
        </div>
      </div>
    </>
  );
};
