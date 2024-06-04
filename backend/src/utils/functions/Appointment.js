import appointments from "../const/scheduler.js";

const setAppoinments = (schedulerPayload) => {
  schedulerPayload.appointments = appointments;
  return schedulerPayload;
};

const updateAppointments = (scheduler, appointmentId, hour, numOfSessions) => {
  const newScheduler = { ...scheduler };

  const parseDate = new Date(hour);
  let hourByDate = parseDate.getHours();
  const minutesByDate = parseDate.getMinutes();
  hourByDate += minutesByDate === 30 ? 0.5 : 0;

  const allowHours = Object.keys(newScheduler).map(Number);

  // Contador para verificar cuántas citas tiene el usuario en este día
  let userDailyAppointments = 0;

  // Verifica si el usuario ya tiene citas en este día
  for (let key in newScheduler) {
    if (newScheduler[key] === appointmentId) {
      userDailyAppointments += 0.5;
    }
  }

  // Verificar si el usuario puede agendar más citas hoy
  if (userDailyAppointments >= 0.5) {
    return [null, "El usuario ya ha alcanzado el límite de citas por día."];
  }

  for (let i = 0; i < numOfSessions; i++) {
    if (!allowHours.includes(hourByDate) || newScheduler[hourByDate]) {
      return [
        null,
        "Horario de reserva no disponible, esta hora no está habilitada o ya está ocupada.",
      ];
    }

    newScheduler[hourByDate] = appointmentId;
    hourByDate += 0.5;
  }

  return [newScheduler, null];
};

export default { setAppoinments, updateAppointments };
