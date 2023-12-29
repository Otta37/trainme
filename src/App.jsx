import Login from './login'
import Home from './Home'
import Schede from './Schede'
import './App.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { UtenteContext } from './stores/UtenteContext';
import { useState } from 'react';
import SkeletonHome from './SkeletonHome'
import axios from 'axios';

function App() {
  const [auth, setAuth] = useState(false);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Questa funzione verrà eseguita ogni volta che l'endpoint cambia
    setLoading(true);
    checkAuth();
    setLoading(false);
  }, [location.pathname]); // Dipendenza dell'effetto sull'endpoint

  const checkAuth = () => {

    let token_jwt = localStorage.getItem("jwt");

    if (token_jwt) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token_jwt}`;
      axios.get("http://192.168.1.27:3000/is_auth")
        .then((res) => {
          localStorage.setItem("jwt", res.data);
          axios.defaults.headers.common["Authorization"] = `Bearer ${res.data}`;
        });
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }


  return (
    <>
      <UtenteContext.Provider value={{auth, setAuth, index, setIndex}}>
        <Router>
          <Routes>
            <Route path="/" index element={<Login />} />
            <Route path="/home" element={<SkeletonHome body={<Home />} />} />
            <Route path="/schede" element={<SkeletonHome body={<Schede />} />} />
          </Routes>
        </Router>
      </UtenteContext.Provider>
    </>
  )
}

export default App
