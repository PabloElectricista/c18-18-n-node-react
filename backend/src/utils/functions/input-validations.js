import Validator from "validatorjs";

//imports input-rules
import {
  createNewPatientRules,
  createNewDoctorRules,
  getSchedulerByDateRules,
  createNewAppointmentRules,
  recoveryPasswordRules,
  createNewSpecialtyRules,
  loginUserRules,
  createNewClinicRules,
  updatePatientRules,
  updateDoctorRules,
  updateSpecialtyRules,
  updateClinicRules,
} from "../const/input-rules.js";

//imports custom-message
import {
  customMessagesPatient,
  customMessagesDoctor,
  customMessagesAppointment,
  customMessageEmail,
  customMessagesSpecialty,
  customMessagesClinic,
  customMessagesLoginUser,
  customMessagesUpdatePatient,
  customMessagesUpdateDoctor,
  customMessagesUpdateSpecialty,
  customMessagesUpdateClinic,
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

const updatePatientValidations = (newUserPayload) => {
  const validation = new Validator(
    newUserPayload,
    updatePatientRules,
    customMessagesUpdatePatient
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

const updateDoctorValidations = (newUserPayload) => {
  const validation = new Validator(
    newUserPayload,
    updateDoctorRules,
    customMessagesUpdateDoctor
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

const updateSpecialtyValidations = (SpecialtyPayload) => {
  const validation = new Validator(
    SpecialtyPayload,
    updateSpecialtyRules,
    customMessagesUpdateSpecialty
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

const emailValidations = (emailPayload) => {
  const validation = new Validator(
    emailPayload,
    recoveryPasswordRules,
    customMessageEmail
  );
  const errors = validation.errors.all();
  if (validation.fails()) return errors;
  return null;
};

const createNewUpdateClinicValidations = (newClinicPayload) => {
  const validation = new Validator(
    newClinicPayload,
    updateClinicRules,
    customMessagesUpdateClinic
  );
  const errors = validation.errors.all();
  if (validation.fails()) return errors;
  return null;
};

const loginUserValidations = (loginUserPayload) => {
  const validation = new Validator(
    loginUserPayload,
    loginUserRules,
    customMessagesLoginUser
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
  loginUserValidations,
  emailValidations,
  updatePatientValidations,
  updateDoctorValidations,
  updateSpecialtyValidations,
  createNewUpdateClinicValidations,
};
