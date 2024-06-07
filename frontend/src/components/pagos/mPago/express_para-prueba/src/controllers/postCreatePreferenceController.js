/*
const { MercadoPagoConfig, Preference,} = require("mercadopago");

require("dotenv").config();
const { ACCESS_TOKEN } = process.env;

const client = new MercadoPagoConfig({
  access_token: ACCESS_TOKEN,
});
console.log(`access_token: ${ACCESS_TOKEN}`);



const postCreatePreferenceController = async ( title, quantity, unit_price, idempotencyKey) => {
  try {
    const body = {
      items: [
        {
          title: title,
          quantity: Number(quantity),
          unit_price: Number(unit_price),
          currency_id: "ARS",
        }
      ],
      back_urls: {
        success: "http://www.mercadopago.com",
        failure: "http://www.google.com",
        pending: "http://www.wikipedia.com",
      },
      auto_return: "approved",
    };
    
    console.log("Creando objeto body:", body);

    const preference = new Preference(client);


    const result = await preference.create( body, {
      headers: {
        'x-idempotency-key': idempotencyKey
      }
    });

    console.log("Respuesta de MercadoPago:", result);

    if (result.body.id) {
      console.log("ID de preferencia recibido:", result.body.id);
      return result.body.id;
    } else {
      console.log(`Hay un problema con el body o el id. Este es el body: ${JSON.stringify(result.body)}`);
      return null;
    }
  } catch (error) {
    console.error("Error al crear preferencia:", error.message);
    throw new Error("Error al crear preferencia");
  }
};

module.exports = { postCreatePreferenceController };

*/
/*
res
res.json({
  id: result.id,
});
*/