import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Employees from "./Components/Employees";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Employees />
              </>
            }
          />
          <Route
            path="/ourwork"
            element={
              <>
                <Navbar />
                <Hero />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
