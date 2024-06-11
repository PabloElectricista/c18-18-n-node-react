import Validator from "validatorjs";

//imports input-rules
import {
  createNewPatientRules,
  createNewDoctorRules,
  getSchedulerByDateRules,
  createNewAppointmentRules,
  createNewSpecialtyRules,
  createNewClinicRules, 
  // validacion de clinica franco
} from "../const/input-rules.js";
//imports custom-message

import {
  customMessagesPatient,
  customMessagesDoctor,
  customMessagesAppointment,
  customMessagesSpecialty,
  customMessagesClinic,
  // validacion de clinica franco

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

const createNewDoctorValidations = (newUserPayload) => {
  const validation = new Validator(
    newUserPayload,
    createNewDoctorRules,
    customMessagesDoctor
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


const createNewSpecialtyValidations = (SpecialtyPayload) => {
  const validation = new Validator(
    SpecialtyPayload,
    createNewSpecialtyRules,
    customMessagesSpecialty
    );

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
  createNewuPatientValidations,
  createNewDoctorValidations,
  createNewAppointmentValidations,
  createNewSpecialtyValidations,
  getSchedulerByDateValidations,
  createNewClinicValidations,
};
