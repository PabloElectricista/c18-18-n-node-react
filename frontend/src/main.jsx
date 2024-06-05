import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from "./redux/store.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
axios.defaults.baseURL = 'http://localhost:4000/api/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <ToastContainer />
        <App />
      </>
    </Provider>
  </React.StrictMode>,
)
