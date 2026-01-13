import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Conditionally import CSS only when running standalone (dev mode, not federated)
if (import.meta.env.DEV && typeof window !== 'undefined' && !(window as any).__FEDERATED__) {
  import('./index.css');
}

// Set federated flag when loaded as remote module
if (typeof window !== 'undefined') {
  (window as any).__FEDERATED__ = true;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
