import timeZone from "../const/timeZone.js";

const getFormatDate = (date) => {
  const fechaActual = date ? new Date(date) : new Date();
  const formatoFechaHora = fechaActual.toLocaleString("es-ES", timeZone);
  const fechaFormateadaConEspacios = formatoFechaHora.replace(",", "");
  return fechaFormateadaConEspacios;
};

const generateDateRange = (days, dates) => {
  const today = new Date();
  for (let i = 0; i <= days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
};

const addHour = (originalDate, hoursToAdd) => {
  if (!(originalDate instanceof Date)) {
    throw new Error("El primer argumento debe ser una instancia de Date.");
  }

  if (typeof hoursToAdd !== "number" || isNaN(hoursToAdd)) {
    throw new Error("El segundo argumento debe ser un número válido.");
  }

  const newDate = new Date(originalDate.getTime());
  newDate.setHours(newDate.getHours() + hoursToAdd);

  return newDate;
};

const addDays = (originalDate, daysToAdd) => {
  if (!(originalDate instanceof Date)) {
    throw new Error("El primer argumento debe ser una instancia de Date.");
  }

  if (typeof daysToAdd !== "number" || isNaN(daysToAdd)) {
    throw new Error("El segundo argumento debe ser un número válido.");
  }

  const newDate = new Date(originalDate.getTime());
  newDate.setDate(newDate.getDate() + daysToAdd);

  return newDate;
};

const setHourToDate = (date, hours) => {
  const newDate = new Date(date);
  newDate.setHours(hours, 0, 0, 0);
  return newDate;
};

export { getFormatDate, addHour, addDays, setHourToDate, generateDateRange };
