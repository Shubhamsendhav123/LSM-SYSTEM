import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
<Provider>
   <BrowserRouter>
    <App />
    <Toaster/>
   </BrowserRouter>
   </Provider>

)
