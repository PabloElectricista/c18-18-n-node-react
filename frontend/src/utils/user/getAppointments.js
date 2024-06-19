import axios from "axios";
export const getUserScheludes = async ({ doctor_name, doctor_last_name, day, doctor_id }) => {
  try {
    const result = await axios(`/scheduler/doctor/666698b2f8f9b0e0fc0bcf3e`, {  
                                                // 666698b2f8f9b0e0fc0bcf3e
      Headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + localStorage.getItem('tkn')
      }
    })
    const { data } = result.data

    console.log(data);

    // const appointments = data.filter(appointment => {
    //   const isDate = appointment.reserved_at.includes(day)
    //   const name = appointment.doctor_name === doctor_name
    //   const lastName = appointment.doctor_last_name === doctor_last_name
    //   return name && lastName && isDate
    // });
    // if (appointments && appointments.length > 0) {
    //   return appointments.map(({ id, reserved_at, patient_name, patient_last_name }) => {
    //     let hour = reserved_at.split(' ')[1]
    //     hour = hour.slice(0, hour.length - 3)
    //     return {
    //       id, hour, patient_name, patient_last_name
    //     }
    //   });
    // }
    // else return []
    return []
  } catch (error) {
    return error
  }
}