
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import store from "../src/Redux/Store"
import 'flowbite';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
)
