import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const ButtonPayPal = (props) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: props.invoice, //factura
          amount: { // el monto de la factura
            value: props.totalValue,
          },
        },
      ]
    })
  };

  // Esto podría ir al backend; captura el pago
  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    console.log("información sobre la order:", order); // Esto entrega información sobre lo que se pagó
    if (order.status === "COMPLETED") {
      props.onSuccess(); //importante
    }
  }

  return (
    <PayPalButtons createOrder={ createOrder } onApprove={ onApprove }/>
  )
}

export default ButtonPayPal;
