import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Note: Not importing globals.css - shell app provides global styles
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
