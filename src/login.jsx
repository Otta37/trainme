import { useRef } from 'react';
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card'; 
import { Divider } from 'primereact/divider';
import { FitnessCenter } from '@mui/icons-material';

function Login() {
    const refUsername = useRef();
    const refPassword = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(refUsername.current.value)
        alert(refPassword.current.value)
    }
    
    return (
        <>
            <div className="h-full flex align-items-center">
                <Card>
                    <div className="card">
                        <div className="flex flex-column md:flex-row">
                            <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="p-inputgroup flex-1 my-6">
                                        <span className="p-float-label">
                                            <InputText name="username" ref={refUsername} />
                                            <label htmlFor="username">Username</label>
                                        </span>
                                    </div>
                                    
                                    <div className="p-inputgroup flex-1 my-6">
                                        <span className="p-float-label">
                                        <Password name="password" inputRef={refPassword} toggleMask/>
                                            <label htmlFor="password">Password</label>
                                        </span>
                                    </div>
                                    <Button label="Login" icon={<FitnessCenter />} className="w-10rem mx-auto"></Button>
                                </form>                            
                            </div>
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
