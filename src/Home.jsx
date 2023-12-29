import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useState } from 'react';

// Aggiungere un testo di bentornato all'utente, quindi prevedere una get ai dati dell'utente correggere la parte di nome e cognome

function Home() {
    const [loading, setLoading] = useState(true);
    const nome = "Marco", cognome = "Violi";

    return (
        <>
            {
                loading 
                    ? <Button onClick={() => setLoading(false)} label='Load page'/>
                    : <Card title="TRAIN ME" pt={{body: { className: 'bg-blue-600 text-white border-round-lg' }}}>
                        <p className="m-0">
                            Ciao {nome} {cognome}, bentornato nella nostra applicazione per la palestra! Qui troverai informazioni su allenamenti, classi, istruttori e molto altro. Siamo dedicati a fornirti una piattaforma completa per raggiungere i tuoi obiettivi di fitness. Dai un'occhiata alle nostre ultime classi, consulta gli allenamenti consigliati e prenota subito la tua prossima sessione di fitness. Siamo qui per guidarti lungo il tuo percorso verso una vita più sana e in forma!

                        </p>
                    </Card>
            }
            
        </>
    )
}

export default Home;