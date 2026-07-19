import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import MisPedidos from './pages/MisPedidos';

function App() {
  return (
    <BrowserRouter basename="/cr3">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/mis-pedidos" element={<MisPedidos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;