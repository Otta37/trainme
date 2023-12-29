import axios from "axios";

function checkAuth() {

    let token_jwt = localStorage.getItem("jwt");

    if (token_jwt) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token_jwt}`;
        return axios.get("http://192.168.1.27:3000/is_auth")
            .then((res) => {
                localStorage.setItem("jwt", res.data);
                axios.defaults.headers.common["Authorization"] = `Bearer ${res.data}`;
                return res.data;
            });
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }

    

}

export default checkAuth;