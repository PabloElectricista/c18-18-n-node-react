/* eslint-disable react/prop-types */
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify'

const ButtonPayPal = ({value}) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Suscripción", //factura
          amount: { // el monto de la factura
            value
          },
        },
      ]
    })
  };

  // Esto podría ir al backend; captura el pago
  const onApprove = async (data, actions) => {
    console.log(data);
    const order = await actions.order.capture();
    console.log("información sobre la order:", order); // Esto entrega información sobre lo que se pagó
    if (order.status === "COMPLETED") {
      toast.success('Membresía pagada correctamente') //importante
    }
  }

  return (
    <PayPalButtons createOrder={ createOrder } onApprove={ onApprove }/>
  )
}

export default ButtonPayPal;
