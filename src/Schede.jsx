import { Card } from "primereact/card";
import { useContext, useState } from "react";
import { UtenteContext } from "./stores/UtenteContext";
import axios from "axios";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabMenu } from "primereact/tabmenu";
import MainMenu from "./components/MainMenu";
import { Button } from "primereact/button";


function Schede() {
    const [loading, setLoading] = useState(false);
    const [schede, setSchede] = useState([
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
        {
            "data": "11/12/2023",
            "obiettivo": "massa",
            "durata": 35,
            "n-allenamenti": 3
        },
        {
            "data": "11/11/2023",
            "obiettivo": "definizione",
            "durata": 30,
            "n-allenamenti": 3
        },
    ]);


    // setLoading(true);
    // axios.get("http://192.168.1.27:3000/schede/utente")
    //     .then((res) => {
    //         setLoading(false);
    //         setSchede(res.data);
    //     })
    //     .catch(() => {
    //         setLoading(false);
    //         setSchede([
    //             {
    //                 "data": "11/12/2023",
    //                 "obiettivo": "massa",
    //                 "durata": 35,
    //                 "n-allenamenti": 3
    //             },
    //             {
    //                 "data": "11/11/2023",
    //                 "obiettivo": "definizione",
    //                 "durata": 30,
    //                 "n-allenamenti": 3
    //             }
    //         ])
    //     })
        
    return (
        <>

            {loading 
                ? <h1>Caricamento ...</h1>
                : <DataTable value={schede} className="p-datatable-scrollable" scrollHeight="flex" scrollable resizableColumns stripedRows tableStyle={{ minWidth: '10rem' }}>
                    <Column field="data" header="Data"></Column>
                    <Column field="obiettivo" header="Obiettivo"></Column>
                    <Column field="durata" header="Durata (gg)"></Column>
                    <Column field="n-allenamenti" header="# Allenamenti"></Column>
                </DataTable>
            }
        </>
    );
}

export default Schede;