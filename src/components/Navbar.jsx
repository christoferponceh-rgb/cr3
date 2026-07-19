import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/catalogo">Catálogo Gamer</NavLink>
        <NavLink to="/mis-pedidos">Mis Pedidos</NavLink>
      </nav>
    </header>
  );
}