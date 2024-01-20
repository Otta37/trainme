import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import { Message } from "primereact/message";
import { useNavigate } from "react-router-dom";
import ServiceResource from "./service/ServiceResource";

function Login() {
  const refUsername = useRef();
  const refPassword = useRef();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt")) navigate("/home");
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj_cred = {
      username: refUsername.current.value,
      password: refPassword.current.value,
    };

    setLoading(true);

    ServiceResource.post("login", obj_cred)
      .then((res) => {
        setLoading(false);
        localStorage.setItem("jwt", res.token);
        navigate("/home");
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
        setErrorLogin(true);
      });
  };

  return (
    <>
      <div className="h-full w-full flex align-items-center justify-content-center p-4">
        <Card>
          <div className="card">
            <div className="flex flex-column md:flex-row">
              <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-column align-items-center justify-content-center gap-6 py-2">
                  {errorLogin && (
                    <Message
                      severity="error"
                      text="Username o password errati"
                    />
                  )}
                  <div className="p-inputgroup flex-1">
                    <span className="p-float-label">
                      <InputText name="username" ref={refUsername} />
                      <label htmlFor="username">Username</label>
                    </span>
                  </div>

                  <div className="p-inputgroup flex-1">
                    <span className="p-float-label">
                      <Password
                        name="password"
                        inputRef={refPassword}
                        feedback={false}
                        toggleMask
                      />
                      <label htmlFor="password">Password</label>
                    </span>
                  </div>
                  <Button
                    label="Login"
                    icon={<FitnessCenterRoundedIcon />}
                    className="w-10rem mx-auto"
                    loading={loading}
                  ></Button>
                </div>
              </form>
              <div className="w-full md:w-2">
                <Divider layout="vertical" className="hidden md:flex">
                  <b>OR</b>
                </Divider>
                <Divider
                  layout="horizontal"
                  className="flex md:hidden"
                  align="center"
                >
                  <b>OR</b>
                </Divider>
              </div>
              <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                <Button
                  label="Registrati"
                  icon="pi pi-user-plus"
                  severity="success"
                  className="w-10rem"
                ></Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;
