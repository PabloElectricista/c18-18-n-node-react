const createNewPatientRules = {
  name: "string|between:3,15|required",
  last_name: "string|between:3,20",
  patient_dni: "string|size:10|required",
  age: "integer",
  gender: "string|min:5|max:9|required",
  phone: "string|size:10|required",
  email: "required|email",
};

const updatePatientRules = {
  name: "string|between:3,15",
  last_name: "string|between:3,20",
  patient_dni: "string|size:10",
  age: "integer",
  gender: "string|min:5|max:9",
  phone: "string|size:10",
  email: "email",
};

const createNewDoctorRules = {
  clinic_id: "string|hex|size:24|required",
  name: "string|between:3, 15|required",
  last_name: "string|between:3, 20",
  doctor_dni: "string|size:10|required",
  gender: "string|min:5|max:9|required",
  phone: "string|size:10|required",
  email: "required|email",
  specialty_id: "string|hex|size:24|required",
};

const updateDoctorRules = {
  clinic_id: "string|hex|size:24",
  name: "string|between:3, 15",
  last_name: "string|between:3, 20",
  doctor_dni: "string|size:10",
  gender: "string|min:5|max:9",
  phone: "string|size:10",
  email: "required|email",
  specialty_id: "string|hex|size:24",
};

const getSchedulerByDateRules = {
  date_type: "string|in:week,half_month,month",
  date_to: "date",
  date_from: "date",
};

const createNewAppointmentRules = {
  clinic_id: "string|hex|size:24|required",
  doctor_id: "string|hex|size:24|required",
  specialty_id: "string|hex|size:24|required",
  duration: "|integer|min:1|max:1",
  reserved_at: "date",
};

const createNewSpecialtyRules = {
  name: "string|between:3, 25|required",
  description: "string|between:3, 25|required",
};

const updateSpecialtyRules = {
  name: "string|between:3, 25",
};

const createNewClinicRules = {
  name_clinic: "string|between:3,20|required",
  room_number: "string|between:2,5|required",
};

const recoveryPasswordRules = {
  email: "required|email",
}; 
const updateClinicRules = {
  name_clinic: "string|between:3,20",
  room_number: "string|between:2,5",
};

const loginPatientRules = {
  email: "email|required",
  phone: "string|size:10|required",

};

export {
  createNewPatientRules,
  createNewDoctorRules,
  getSchedulerByDateRules,
  createNewAppointmentRules,
  recoveryPasswordRules, 
  createNewSpecialtyRules,
  loginPatientRules,
  createNewClinicRules,
  updatePatientRules,
  updateDoctorRules,
  updateSpecialtyRules,
  updateClinicRules,
};
