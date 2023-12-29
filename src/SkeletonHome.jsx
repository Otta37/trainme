import MainMenu from "./components/MainMenu";
import { Button } from "primereact/button";
import { Card } from 'primereact/card';
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UtenteContext } from "./stores/UtenteContext";

function SkeletonHome({body}) {
    const {auth} = useContext(UtenteContext);

    if (!auth) return <Navigate to="/" />

    return (
        <>
            <div className="flex flex-column" style={{maxHeight: "100dvh", height: "100dvh"}}>
                <MainMenu /> 
                <div className="p-4 flex flex-1 flex-column gap-2 justify-content-between overflow-y-auto">
                    <div className="flex-1 overflow-y-auto">
                        <div className="max-h-full" style={{overflow: "auto"}}>
                            {body}
                        </div>
                    </div>
                    <div>
                        <Button className="py-4 text-xl w-full" label="Prossimo allenamento" severity="success" icon="pi pi-angle-double-right" />
                    </div>
                </div>                
            </div>            
        </>
    )
}

export default SkeletonHome;