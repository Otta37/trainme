function SkeletonScheda(scheda) {
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
}
