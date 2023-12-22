import MainMenu from "./components/MainMenu";
import { Button } from "primereact/button";
import { Card } from 'primereact/card';

function Home() {

    const legendTemplate = (
        <div className="flex align-items-center text-primary">
            <span className="pi pi-user mr-2"></span>
            <span className="font-bold text-lg">Lo sapevi?</span>
        </div>
    );

    return (
        <>
            <div className="flex flex-column" style={{height: "100dvh"}}>
                <MainMenu />
                <div className="p-4 flex flex-1 flex-column gap-2">
                    <div className="flex-1">
                        <Card title="TRAIN ME" pt={{body: { className: 'bg-blue-600 text-white border-round-lg' }}}
>
                            <p className="m-0">
                                Benvenuto nella nostra applicazione per la palestra! Qui troverai informazioni su allenamenti, classi, istruttori e molto altro. Siamo dedicati a fornirti una piattaforma completa per raggiungere i tuoi obiettivi di fitness. Dai un'occhiata alle nostre ultime classi, consulta gli allenamenti consigliati e prenota subito la tua prossima sessione di fitness. Siamo qui per guidarti lungo il tuo percorso verso una vita più sana e in forma!

                            </p>
                        </Card>
                    </div>
                    <div>
                        <Button className="py-4 text-xl w-full" label="Prossimo allenamento" severity="success" icon="pi pi-angle-double-right" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;