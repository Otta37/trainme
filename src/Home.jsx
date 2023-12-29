import { Card } from 'primereact/card';

function Home() {
    return (
        <>
            <Card title="TRAIN ME" pt={{body: { className: 'bg-blue-600 text-white border-round-lg' }}}>
                <p className="m-0">
                    Benvenuto nella nostra applicazione per la palestra! Qui troverai informazioni su allenamenti, classi, istruttori e molto altro. Siamo dedicati a fornirti una piattaforma completa per raggiungere i tuoi obiettivi di fitness. Dai un'occhiata alle nostre ultime classi, consulta gli allenamenti consigliati e prenota subito la tua prossima sessione di fitness. Siamo qui per guidarti lungo il tuo percorso verso una vita più sana e in forma!

                </p>
            </Card>
        </>
    )
}

export default Home;