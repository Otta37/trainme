import Login from './login'
import Home from './Home'
import './App.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
