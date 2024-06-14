import axios from "axios"
import { toast } from "react-toastify"

export const useCrear = async (paciente) => {
  try {
    const {data}= await axios.post('/patient', paciente)
    console.table(data.data);
  } catch (error) {
    toast.error(error.message)
  }
}

export const listar = async () => {
  try {
    const {data}= await axios('/patient')
    return data.data
  } catch (error) {
    toast.error(error.message)
  }
}