import React, { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';

const MPago = ({ servicio }) => { // Acepta estado como una prop
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("TEST-b05526c9-f91b-4478-8344-db2bd7cbc235"); //'YOUR_PUBLIC_KEY'
  

  
  const servicio = {
        title: "producto1",
        quality: 1,
        price: 1,
      };
  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3000/create-preference", servicio);
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error('Error al capturar el ID:', error);
      throw error;
    }
  };

  const HandleEbay = async () => { 
    try {
      const id = await createPreference();
      if(id) {
       setPreferenceId(id);
      }
    } catch (error) {
      console.error('Error en la captura de ID o al establecer el estado:', error);
      throw error;
    }
  }

  return (
    <>
      <button onClick={eBay}>Comprar</button>
      <h1>Este es un producto de prueba</h1>
      <img src="https://res.cloudinary.com/dqh2illb5/image/upload/v1716077714/misLibros/portada-miniatura_fxjdk7.png" alt="Imagen del producto" />
      <p>1 USD</p>
      <button onClick={HandleEbay}>Comprar</button>
      { preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} /> }
    </>
  );
}

export default MPago;
