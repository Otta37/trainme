//data_sql è la data che returna direttamente l'API
export function formatDataToLocale(data_sql) {
  return new Date(data_sql).toLocaleDateString();
}
