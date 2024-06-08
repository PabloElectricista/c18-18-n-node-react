import { useState } from "react";
import MPago from "./mPago";

const ProductoExample = () => {
  const [servicio, setservicio] = useState(null);

  const handleServicio = () => {
    setservicio({
      title: "producto1",
      quality: 1,
      unit_price: 1
    });
    console.log(servicio);
  };

  return (
    <div>
      <h1>Este es un producto de prueba</h1>
      <img src="https://res.cloudinary.com/dqh2illb5/image/upload/v1716077714/misLibros/portada-miniatura_fxjdk7.png" alt="Imagen del producto" />
      <p>1 USD</p>
      <button onClick={handleServicio}>Comprar</button>
      <MPago servicio={servicio} />
    </div>
  );
};

export default ProductoExample;