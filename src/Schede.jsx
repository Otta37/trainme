import { useState, useRef, useContext, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { DataScroller } from "primereact/datascroller";
import SkeletonSchede from "./components/SkeletonSchede";
import { UtenteContext } from "./stores/UtenteContext";

function Schede() {
  const { setIndex } = useContext(UtenteContext);
  const [schede, setSchede] = useState(false);
  const ds = useRef(null);

  useEffect(() => {
    setIndex(1);
  }, []);

  const onRowSelect = (e) => {
    console.log(e.data);
  };

  // Fare la richiesta delle schede per l'utente

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

  const itemTemplate = (data) => {
    return (
      <>
        <p>data.data</p>
      </>
    );
  };

  const footer = (
    <Button
      type="text"
      icon="pi pi-plus"
      label="Load"
      onClick={() => ds.current.load()}
    />
  );

  return (
    <>
      {schede === false ? (
        <SkeletonSchede />
      ) : (
        <DataScroller
          ref={ds}
          value={schede}
          itemTemplate={itemTemplate}
          rows={5}
          loader
          footer={footer}
        />
      )}

      {/* <DataTable value={schede} scrollable scrollHeight="flex" stripedRows 
                        selectionMode={"single"} onRowSelect={onRowSelect} tableStyle={{ minWidth: '10rem' }}>
                    <Column field="data" header="Data"></Column>
                    <Column field="obiettivo" header="Obiettivo"></Column>
                    <Column field="durata" header="Durata (gg)"></Column>
                    <Column field="n-allenamenti" header="# Allenamenti"></Column>
                </DataTable> */}
    </>
  );
}

export default Schede;
