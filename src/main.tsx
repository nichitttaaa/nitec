import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
>>>>>>> 4af9dce (crearea compomentelor de baza)
  </StrictMode>,
)
