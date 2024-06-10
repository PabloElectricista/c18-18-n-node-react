import Validator from "validatorjs";

//imports input-rules
import {
  createNewPatientRules,
  getSchedulerByDateRules,
  createNewAppointmentRules,
  createNewClinicRules, // validacion de clinica franco
} from "../const/input-rules.js";

//imports custom-message
import {
  customMessagesPatient,
  customMessagesAppointment,
  customMessagesClinic, // validacion de clinica franco
} from "../const/custom-message.js";

const createNewPatientValidations = (newUserPayload) => {
  const validation = new Validator(
    newUserPayload,
    createNewPatientRules,
    customMessagesPatient
  );
  const errors = validation.errors.all();
  if (validation.fails()) return errors;
  return null;
};

const getSchedulerByDateValidations = (filters) => {
  const validation = new Validator(filters, getSchedulerByDateRules);
  const errors = validation.errors.all();
  if (validation.fails()) return errors;
  return null;
};

const createNewAppointmentValidations = (appointmentPayload) => {
  const validation = new Validator(
    appointmentPayload,
    createNewAppointmentRules,
    customMessagesAppointment
  );
  const errors = validation.errors.all();
  if (validation.fails()) return errors;
  return null;
};

// funcion validacion franco
const createNewClinicValidations = (newClinicPayload) => {
  const validation = new Validator(
    newClinicPayload,
    createNewClinicRules,
    customMessagesClinic
  );
  const errors = validation.errors.all();
  if (validation.fails()) return errors;
  return null;
};

export {
  createNewPatientValidations,
  getSchedulerByDateValidations,
  createNewAppointmentValidations,
  createNewClinicValidations,
};
