/*
import React, { useState } from 'react';
import ButtonPaypal from './components/.../ButtonPaypal';

function App() {
  const [totalValue, setTotalValue] = useState(null);
  const [invoice, setInvoice] = useState('');

  const handleSelectService = (value, invoice) => {
    setTotalValue(value);
    setInvoice(invoice);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}>
        <h2>Servicios</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>Consulta Pediátrica</h3>
          <p>1 USD</p>
          <button onClick={() => handleSelectService('1', 'consulta pediátrica')}>Seleccionar</button>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Consulta Cardióloga</h3>
          <p>2 USD</p>
          <button onClick={() => handleSelectService('2', 'cardiólogo')}>Seleccionar</button>
        </div>
      </div>
      <div style={{ flex: 1, padding: '10px', textAlign: 'center' }}>
        <h2>Pago</h2>
        {totalValue && (
          <div>
            <ButtonPaypal totalValue={totalValue} invoice={invoice} SameSite="none" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
*/

/*

para main envolver es PayPalScriptProvider
import React from 'react'
import ReactDOM from 'react-dom/client'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import App from './App.jsx'

const initialOptions = {
  clientId: "test",
  currency: "USD",
  intent: "capture",
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        'client-id': 'AdR7AKE-UiHArGco6ggksVcg1xO7gsktDcP0nEG7Ptg2EU91YqTLXcCqm3q6ualK8S6XtoOYFmF5jQFE',
      }}
    >
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>,
)
 

*/