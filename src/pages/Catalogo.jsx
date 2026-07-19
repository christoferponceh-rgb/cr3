import { useState, useEffect } from 'react';
import ProductoCard from '../components/ProductoCard';

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/productos')
      .then((res) => {
        if (!res.ok) throw new Error('Error al conectar con el servidor: ' + res.status);
        return res.json();
      })
      .then((data) => {
        setProductos(data.productos);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) return <h2>⏳ Cargando catálogo...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>❌ Error: {error}</h2>;

  return (
    <section>
      <h2>Catálogo Gamer ✅</h2>
      <div className="catalogo-grid">
        {productos.map(prod => (
          <ProductoCard key={prod.id} producto={prod} />
        ))}
      </div>
    </section>
  );
}