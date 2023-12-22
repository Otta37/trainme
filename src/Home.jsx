import MainMenu from "./components/MainMenu";
import { Button } from "primereact/button";

function Home() {


    return (
        <>
            <div className="flex flex-column" style={{height: "100dvh"}}>
                <MainMenu />
                <div className="p-2 flex flex-column gap-2 justify-content-between h-full">
                    <div className="">
                        <h5>Sono la home</h5>
                    </div>
                    <div>
                        <Button className="text-xl w-full" label="Prossimo allenamento" severity="success" icon="pi pi-angle-double-right" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;