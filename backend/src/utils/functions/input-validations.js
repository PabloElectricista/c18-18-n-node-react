import Validator from "validatorjs";

//imports input-rules
import {
  createNewPatientRules,
  createNewDoctorRules,
  getSchedulerByDateRules,
  createNewAppointmentRules,
  createNewSpecialtyRules,
  createNewClinicRules, 
  loginPatientRules,
} from "../const/input-rules.js";
//imports custom-message

import {
  customMessagesPatient,
  customMessagesDoctor,
  customMessagesAppointment,
  customMessagesSpecialty,
  customMessagesClinic,
  customMessagesLoginPatient,

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
  const errors = validation.errors.all();
  if (validation.fails()) return errors;
  return null;
};

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

const loginPatientValidations = (loginPatientPayload) => {
  const validation = new Validator(
    loginPatientPayload,
    loginPatientRules,
    customMessagesLoginPatient,

  );
  const errors = validation.errors.all();
  if (validation.fails()) return errors;
  return null;
};

export {
  createNewPatientValidations,
  createNewDoctorValidations,
  createNewAppointmentValidations,
  createNewSpecialtyValidations,
  getSchedulerByDateValidations,
  createNewClinicValidations,
  loginPatientValidations,
};
