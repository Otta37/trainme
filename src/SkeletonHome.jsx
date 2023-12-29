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
                <div className="p-4 flex flex-1 flex-column gap-2 justify-content-between overflow-y-hidden">
                    <div className="flex-1 overflow-y-hidden">
                        <div className="h-full overflow-y-auto">
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