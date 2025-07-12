import "./App.css";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <div className="App">
        {" "}
        <Navbar />
        <main className="app-content">
          <AppRoutes />
        </main>
      </div>
    </>
  );
}

export default App;
