import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from "react-router";
import Contact from './pages/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>,
)
