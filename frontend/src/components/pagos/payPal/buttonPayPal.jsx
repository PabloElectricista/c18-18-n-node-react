import React from "react";

const PaypalButton = (props) => {
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
  return (
    <div>
    </div>
  )
}

export default PaypalButton;