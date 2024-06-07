import React, { useState } from 'react';
import ButtonPaypal from './components/pagos/payPal/ButtonPayPal';

function App() {
    const [hasDebt, setHasDebt] = useState(false);
    const [totalValue, setTotalValue] = useState(null);
    const [invoice, setInvoice] = useState('');
  
    const simulateDebt = () => {
      setHasDebt(true);
    };
  
    const handleRenewSubscription = () => {
      setTotalValue('7');
      setInvoice('suscripción');
    };
  
    const handlePaymentSuccess = () => {
      setHasDebt(false);
      setTotalValue(null);
      setInvoice('');
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <div style={{ flex: 1, padding: '10px', textAlign: 'center' }}>
          <h1>Bienvenido</h1>
          {!hasDebt && (
            <button onClick={simulateDebt}>Simular deuda</button>
          )}
          {hasDebt && (
            <div>
              <h1>Tienes una deuda pendiente</h1>
              <p>
                La suscripción tiene un valor de 7 USD/mes. ¿Quieres renovar la suscripción?
              </p>
              <button onClick={handleRenewSubscription}>Renovar suscripción</button>
            </div>
          )}
          {totalValue && (
            <div style={{ marginTop: '20px' }}>
              <ButtonPaypal totalValue={totalValue} invoice={invoice} SameSite="none" onSuccess={handlePaymentSuccess} />
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default App;