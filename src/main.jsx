import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "@fontsource/cute-font"
import "@fontsource/outfit"
import "@fontsource/roboto"
import "@fontsource/raleway"
import "@fontsource/rubik"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
