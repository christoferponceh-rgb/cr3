export default function ProductoCard({ producto }) {
  return (
    <article className="producto-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.categoria}</p>
      <p><strong>${producto.precio.toLocaleString()}</strong></p>
      <p>{producto.disponible ? '✅ En Stock' : '❌ Agotado'}</p>
    </article>
  );
}