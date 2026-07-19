import { useState, useEffect } from 'react';
import FormularioPedido from '../components/FormularioPedido';

export default function MisPedidos() {
  const [pedidos, setPedidos] = useState(() => {
    const guardados = localStorage.getItem('pedidos_gamer');
    return guardados ? JSON.parse(guardados) : [];
  });
  
  const [pedidoEditando, setPedidoEditando] = useState(null);
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    localStorage.setItem('pedidos_gamer', JSON.stringify(pedidos));
  }, [pedidos]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/productos')
      .then(res => res.json())
      .then(data => setCatalogo(data.productos))
      .catch(err => console.error("Error cargando referencias:", err));
  }, []);

  const guardarPedido = (nuevoPedido) => {
    if (pedidoEditando) {
      setPedidos(pedidos.map(p => p.id === nuevoPedido.id ? nuevoPedido : p));
      setPedidoEditando(null);
    } else {
      setPedidos([...pedidos, nuevoPedido]);
    }
  };

  const eliminarPedido = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este pedido?")) {
      setPedidos(pedidos.filter(p => p.id !== id));
    }
  };

  const obtenerNombreProducto = (id) => {
    const prod = catalogo.find(p => p.id === id);
    return prod ? prod.nombre : 'Producto desconocido';
  };

  return (
    <section>
      <h2>Gestión de Pedidos</h2>
      
      <FormularioPedido 
        catalogo={catalogo}
        onGuardar={guardarPedido}
        pedidoEditando={pedidoEditando}
        onCancelar={() => setPedidoEditando(null)}
      />

      <h3>Lista de Pedidos</h3>
      {pedidos.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map(pedido => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.cliente}</td>
                <td>{obtenerNombreProducto(pedido.productoId)}</td>
                <td>{pedido.cantidad}</td>
                <td>
                  <button onClick={() => setPedidoEditando(pedido)}>Editar</button>{' '}
                  <button className="btn-danger" onClick={() => eliminarPedido(pedido.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}