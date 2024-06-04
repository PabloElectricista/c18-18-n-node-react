import timeZone from "../const/timeZone";

const getFormatDate = () => {
  const fechaActual = new Date();
  const formatoFechaHora = fechaActual.toLocaleString("es-ES", timeZone);
  const fechaFormateadaConEspacios = formatoFechaHora.replace(",", "");
  return fechaFormateadaConEspacios;
};

export default getFormatDate;
