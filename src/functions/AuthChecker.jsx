import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function AuthChecker({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      axios.get("http://192.168.1.27:3000/is_auth").catch(() => {
        navigate("/");
      });
    };

    checkAuthentication();
  }, [navigate]);

  return <>{children}</>;
}

export default AuthChecker;
