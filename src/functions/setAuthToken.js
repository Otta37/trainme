import axios from "axios";

function setAuthToken(token) {  
  if (token) {
    // Se c'è un token, imposta l'intestazione 'Authorization'
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Se non c'è un token, rimuovi l'intestazione 'Authorization'
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;