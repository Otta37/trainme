import { useRef, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card'; 
import { Divider } from 'primereact/divider';
import { FitnessCenter } from '@mui/icons-material';
import { UtenteContext } from './stores/UtenteContext';
import { Message } from 'primereact/message';
import setAuthToken from './functions/setAuthToken';

function Login() {
    const refUsername = useRef();
    const refPassword = useRef();
    const {auth, setAuth} = useContext(UtenteContext);

    const [loading, setLoading] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj_cred = {
            username: refUsername.current.value,
            password: refPassword.current.value
        }

        setLoading(true);

        axios.post("http://192.168.1.27:3000/login", obj_cred)
        .then((res) => {
            setLoading(false);
            setAuthToken(res.data);
            localStorage.setItem("jwt", res.data);
            setAuth(res.data);
        })
        .catch((e) => {
            console.error(e);
            setLoading(false);
            setErrorLogin(true);
            setAuth(false);
        })
    }
    
    if (auth) return <Navigate to="/home" />

    return (
        <>
            <div className="h-full w-full flex align-items-center justify-content-center p-4">
                <Card>
                    <div className="card">
                        <div className="flex flex-column md:flex-row">
                            <form onSubmit={handleSubmit}>
                                <div className="w-full flex flex-column align-items-center justify-content-center gap-6 py-2">
                                    
                                    {errorLogin && <Message severity="error" text="Username o password errati" />}
                                    <div className="p-inputgroup flex-1">
                                        <span className="p-float-label">
                                            <InputText name="username" ref={refUsername} />
                                            <label htmlFor="username">Username</label>
                                        </span>
                                    </div>
                                    
                                    <div className="p-inputgroup flex-1">
                                        <span className="p-float-label">
                                        <Password name="password" inputRef={refPassword} feedback={false} toggleMask/>
                                            <label htmlFor="password">Password</label>
                                        </span>
                                    </div>
                                    <Button label="Login" icon={<FitnessCenter />} className="w-10rem mx-auto" loading={loading} ></Button>

                                </div>
                            </form>  
                            <div className="w-full md:w-2">
                                <Divider layout="vertical" className="hidden md:flex">
                                    <b>OR</b>
                                </Divider>
                                <Divider layout="horizontal" className="flex md:hidden" align="center">
                                    <b>OR</b>
                                </Divider>
                            </div>
                            <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem"></Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Login;
