import Login from "./login";
import Home from "./Home";
import Schede from "./Schede";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UtenteContext } from "./stores/UtenteContext";
import { useState } from "react";
import SkeletonHome from "./SkeletonHome";
import AuthChecker from "./functions/AuthChecker";

function App() {
  const [auth, setAuth] = useState(true);
  const [index, setIndex] = useState(0);

  return (
    <>
      <UtenteContext.Provider value={{ auth, setAuth, index, setIndex }}>
        <Router>
          <Routes>
            <Route path="/" index element={<Login />} />
            <Route
              path="/home"
              element={
                <AuthChecker>
                  <SkeletonHome body={<Home />} />
                </AuthChecker>
              }
            />
            <Route
              path="/schede"
              element={
                <AuthChecker>
                  <SkeletonHome body={<Schede />} />
                </AuthChecker>
              }
            />
          </Routes>
        </Router>
      </UtenteContext.Provider>
    </>
  );
}

export default App;
