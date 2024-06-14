import axios from "axios"
import { toast } from "react-toastify"

export const crear = async (paciente) => {
  try {
    const {data}= await axios.post('/patient', paciente)
    console.log(data.data);
  } catch (error) {
    toast.error(error.message)
  }
}