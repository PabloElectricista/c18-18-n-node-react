/*
const { postCreatePreferenceController } = require("../controllers/postCreatePreferenceController");

const postHandlerPreference = async (req, res) => {
  try {
    console.log(`soy el req.body ${JSON.stringify(req.body)}`);
    const { title, quantity, unit_price } = req.body;
    const idempotencyKey = req.headers['x-idempotency-key']; // Recibe la clave de idempotencia del cliente

    if (!idempotencyKey) {
      return res.status(400).json({ error: "Missing idempotency key" });
    }

    const preferenceId = await postCreatePreferenceController(title, quantity, unit_price, idempotencyKey);

    if (preferenceId) {
      res.status(200).send({
        answer: {
          id: preferenceId,
        }
      });
    } else {
      res.status(500).json({ error: "Error al crear la preferencia" });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  postHandlerPreference
};
*/