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
 