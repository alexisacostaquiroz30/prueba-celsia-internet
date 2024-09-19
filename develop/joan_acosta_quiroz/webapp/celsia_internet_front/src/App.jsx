import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ClientesPage } from './pages/ClientesPage';
import { ClientesFormPage } from './pages/ClientesFormpage';
import { ServiciosPage } from './pages/ServiciosPage';
import { ServiciosFormPage } from './pages/ServiciosFormpage';
import { Navigation } from './components/Navigation'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path="/" element={< Navigate to="/clientespage" />} />
          <Route path="/clientespage" element={<ClientesPage />} />
          <Route path="/clientesFormpage" element={<ClientesFormPage />} />
          <Route path="/cliente/:id" element={<ClientesFormPage />} />
          <Route path="/serviciosPage" element={<ServiciosPage />} />
          <Route path="/serviciosFormPage" element={<ServiciosFormPage />} />
          <Route path="/servicio/:id" element={<ServiciosFormPage />} />
          
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App;