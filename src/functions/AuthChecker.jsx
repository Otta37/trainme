import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ServiceResource from "../service/ServiceResource";

function AuthChecker({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const checkAuthentication = () => {
      let token = localStorage.getItem("jwt");

      if (!token) return navigate("/");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      ServiceResource.get_resource("is_auth", controller)
        .then((res) => {
          localStorage.setItem("jwt", res.token);
          setLoading(false);
        })
        .catch((e) => {
          if (e.code == "ERR_CANCELED") {
            setLoading(false);
            return;
          }

          localStorage.removeItem("jwt");
          navigate("/");
        });
    };

    checkAuthentication();

    return controller.abort();
  }, [navigate]);

  return <>{!loading && children}</>;
}

export default AuthChecker;
