import Login from './login'
import Home from './Home'
import Schede from './Schede'
import './App.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UtenteContext } from './stores/UtenteContext';
import { useState } from 'react';
import { Card } from 'primereact/card'
import SkeletonHome from './SkeletonHome'

function App() {
  const [auth, setAuth] = useState(false);
  const [index, setIndex] = useState(0);

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
