import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import '././styles/index.css'
import App from './App.tsx'
import { ContactList } from './pages/ContactList.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<ContactList/>}/>
      </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
