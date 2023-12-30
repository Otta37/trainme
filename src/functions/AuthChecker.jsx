import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AuthChecker({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = () => {
      let token = localStorage.getItem("jwt");

      if (!token) return navigate("/");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios
        .get("http://192.168.1.27:3000/is_auth")
        .then((res) => {
          localStorage.setItem("jwt", res.data.token);
          setLoading(false);
        })
        .catch((e) => {
          localStorage.removeItem("jwt");
          navigate("/");
        });
    };

    checkAuthentication();
  }, [navigate]);

  return <>{!loading && children}</>;
}

export default AuthChecker;
