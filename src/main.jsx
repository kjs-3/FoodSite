import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Providerr from './Components/Providerr/Providerr.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providerr>
      <App />
    </Providerr>
  </StrictMode>,
)
