const customMessagesPatient = {
  "required.name": "El campo es obligatorio.",
  "string.name": "El campo deben ser letras",
  "between.name": "El campo debe tener mínimo 3 y máximo 15 caracteres",
  "string.last_name": "El campo  deben ser letras",
  "between.last_name": "El campo debe tener mínimo 3 y máximo 20 caracteres",
  "required.patient_dni": "El campo es obligatorio",
  "string.patient_dni": "El campo deben ser letras",
  "size.patient_dni": "El campo debe ser de máximo de 10 dígitos",
  "integer.age": "El campo deber ser un número",
  "required.phone_number": "El campo es obligatorio.",
  "string.phone_number": "El campo el numero debe ir entre comillas dobles",
  "size.phone": "El campo debe ser de máximo de 10 dígitos",
  "string.gender": "El campo deben ser letras",
  "max.gender": "El campo debe ser [HOMBRE,MUJER u OTROS]",
  "required.email": "El campo es obligatorio",
  "email.email": "El campo no es una dirección de correo electrónico válida.",
};

const customMessagesAppointment = {
  "required.patient_id": "El campo es obligatorio.",
  "string.patient_id": "El campo deben ser letras",
  "size.patient_id": "El campo debe ser de máximo de 24 caracteres",
  "required.clinic_id": "El campo es obligatorio",
  "string.clinic_id": "El campo deben ser letras",
  "size.clinic_id": "El campo debe ser de máximo de 24 caracteres",
  "required.doctor_id": "El campo es obligatorio",
  "string.doctor_id": "El campo deben ser letras",
  "size.doctor_id": "El campo debe ser de máximo de 24 caracteres",
  "required.specialty_id": "El campo es obligatorio",
  "string.specialty_id": "El campo deben ser letras",
  "size.specialty_id": "El campo debe ser de máximo de 24 caracteres",
  "required.duration": "El campo es obligatorio",
  "integer.duration": "El campo debe un numero",
  "max.duration": "El campo debe ser maximo 1",
  "minimo.duration": "El campo debe ser maximo 1",
  "date.reserved_at":
    'El campo debe ser en formato fecha y hora "mm/dd/aa hh:mm:ss"',
};

export { customMessagesPatient, customMessagesAppointment };