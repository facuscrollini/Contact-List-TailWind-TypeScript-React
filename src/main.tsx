import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import '././styles/index.css'
import App from './App.tsx'
import { ContactList } from './pages/ContactList.tsx'
import { AddContact } from './pages/AddContact.tsx'
import { Welcome } from './pages/Welcome.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Welcome/>}/>
      <Route path="/contact-list" element={<ContactList/>}/>
      <Route path="/add-contact" element={<AddContact/>}/>
      </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
