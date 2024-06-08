import Validator from "validatorjs";

//imports input-rules
import {
  createNewPatientRules,
  getSchedulerByDateRules,
  createNewAppointmentRules,
} from "../const/input-rules.js";

//imports custom-message
import {
  customMessagesPatient,
  customMessagesAppointment,
} from "../const/custom-message.js";

const createNewuPatientValidations = (newUserPayload) => {
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

export {
  createNewuPatientValidations,
  getSchedulerByDateValidations,
  createNewAppointmentValidations,
};
