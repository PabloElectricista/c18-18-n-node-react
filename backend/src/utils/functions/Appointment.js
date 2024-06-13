import appointments from "../const/scheduler.js";

const setAppoinments = (schedulerPayload) => {
  schedulerPayload.appointments = appointments;
  return schedulerPayload;
};

const updateAppointments = (scheduler, appointmentId, hour, numOfSessions) => {
  const newScheduler = { ...scheduler };
  delete newScheduler.id;

  const parseDate = new Date(hour);
  let hourByDate = parseDate.getHours();
  const minutesByDate = parseDate.getMinutes();
  hourByDate += minutesByDate === 30 ? 0.5 : 0;

  const allowHours = Object.keys(newScheduler.appointments);

  // Contador para verificar cuántas citas tiene el usuario en este día
  let userDailyAppointments = 0;

  // Verifica si el usuario ya tiene citas en este día
  for (let hour in newScheduler.appointments) {
    if (newScheduler.appointments[hour] === appointmentId) {
      userDailyAppointments += 0.5;
    }
  }

  // Verificar si el usuario puede agendar más citas hoy
  if (userDailyAppointments >= 0.5) {
    return [null, "El usuario ya ha alcanzado el límite de citas por día."];
  }

  for (let i = 0; i < numOfSessions; i++) {
    if (
      !allowHours.includes(`${hourByDate}`) ||
      newScheduler.appointments[`${hourByDate}`]
    ) {
      return [
        null,
        "Horario de reserva no disponible, esta hora no está habilitada o ya está ocupada.",
      ];
    }

    newScheduler.appointments[hourByDate] = appointmentId;
    hourByDate += 0.5;
  }

  return [newScheduler, null];
};

const dateFromAndDateToByFilters = (filters) => {
  let dateFrom;
  let dateTo;
  if (filters.date_type) {
    const today = new Date();
    dateFrom = setHourToDate(today, 0);
    dateTo = addDays(today, dateMap[filters.date_type]);
  } else {
    dateFrom = filters.date_type;
    dateTo = filters.date_type;
  }
  return [
    dateFrom.toLocaleString().replace(",", ""),
    dateTo.toLocaleString().replace(",", ""),
  ];
};

export { setAppoinments, updateAppointments, dateFromAndDateToByFilters };
