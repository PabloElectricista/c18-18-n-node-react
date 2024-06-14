import axios from "axios";
export const getUserScheludes = async ({ doctor_name, doctor_last_name, day }) => {
  try {
    const result = await axios(`/appointments`, {
      Headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY3MzZhNDk5NjdiNTIyNTdiMDc4YWQiLCJyb2xlIjoiUEFUSUVOVCIsImlhdCI6MTcxODA0MDIyOCwiZXhwIjoxNzIzMjI0MjI4fQ.s4XxAGKNmT4zdQY0tHg43RfzZPjDgVBKQrOu6wU3NSE'
      }
    })
    const { data } = result.data

    const appointments = data.filter(appointment => {
      const isDate = appointment.reserved_at.includes(day)
      const name = appointment.doctor_name === doctor_name
      const lastName = appointment.doctor_last_name === doctor_last_name
      return name && lastName && isDate
    });
    if (appointments && appointments.length > 0) {
      return appointments.map(({ id, reserved_at, patient_name, patient_last_name }) => {
        let hour = reserved_at.split(' ')[1]
        hour = hour.slice(0, hour.length - 3)
        return {
          id, hour, patient_name, patient_last_name
        }
      });
    }
    else return []
  } catch (error) {
    return error
  }
}