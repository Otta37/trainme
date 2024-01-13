import { useState, useRef, useContext, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { DataScroller } from "primereact/datascroller";
import Loading from "./components/Loading";
import { UtenteContext } from "./stores/UtenteContext";
import { formatDataToLocale } from "./functions/function";
import { Badge } from "primereact/badge";

function Schede() {
  const { setIndex } = useContext(UtenteContext);
  const [schede, setSchede] = useState(false);
  const ds = useRef(null);

  useEffect(() => {
    setIndex(1);

    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get("http://192.168.1.27:3000/schede", { signal })
      .then((res) => setSchede(res.data))
      .catch((err) => {});

    return () => {
      controller.abort();
    };
  }, []);

  /* const onRowSelect = (e) => {
    console.log(e.data);
  }; */

  const itemTemplate = (scheda) => {
    return (
      <>
        <div
          className="p-3 my-3 border border-1 border-round-xl"
          style={{ borderColor: "#d4d4d4" }}
        >
          <div className="flex justify-content-between align-items-center">
            <div className="flex flex-column gap-3">
              <p className="text-md m-0">
                <strong>Obiettivo</strong>: {scheda.obiettivo.toUpperCase()}
              </p>
              <span className="text-sm">{formatDataToLocale(scheda.data)}</span>
            </div>
            <div>
              <Badge value={`${scheda.durata} giorni`} severity="info"></Badge>
            </div>
          </div>
        </div>
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
        <Loading />
      ) : (
        <DataScroller
          ref={ds}
          value={schede}
          itemTemplate={itemTemplate}
          rows={5}
          loader
          footer={schede.length > 5 ? footer : null}
        />
      )}
    </>
  );
}

export default Schede;
