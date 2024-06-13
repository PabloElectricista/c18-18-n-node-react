import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from "./redux/store.js";
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
axios.defaults.baseURL = 'http://localhost:4000/api/';

const initialOptions = {
  clientId: "test",
  currency: "USD",
  intent: "capture",
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <ToastContainer />
        <PayPalScriptProvider
          options={{
            'client-id': 'AdR7AKE-UiHArGco6ggksVcg1xO7gsktDcP0nEG7Ptg2EU91YqTLXcCqm3q6ualK8S6XtoOYFmF5jQFE',
          }}
        >
          <App />
        </PayPalScriptProvider>
      </>
    </Provider>
  </React.StrictMode>,
)
