import { useState, useEffect } from 'react';

export default function FormularioPedido({ catalogo, onGuardar, pedidoEditando, onCancelar }) {
  const [cliente, setCliente] = useState('');
  const [productoId, setProductoId] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [errorUI, setErrorUI] = useState('');

  useEffect(() => {
    if (pedidoEditando) {
      setCliente(pedidoEditando.cliente);
      setProductoId(pedidoEditando.productoId);
      setCantidad(pedidoEditando.cantidad);
      setErrorUI('');
    } else {
      setCliente('');
      setProductoId('');
      setCantidad(1);
      setErrorUI('');
    }
  }, [pedidoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!cliente.trim() || !productoId || cantidad < 1) {
      setErrorUI('❌ Por favor, completa todos los campos obligatorios correctamente.');
      return;
    }
    
    setErrorUI('');

    const nuevoPedido = {
      id: pedidoEditando ? pedidoEditando.id : Date.now(),
      cliente,
      productoId: parseInt(productoId),
      cantidad: parseInt(cantidad)
    };

    onGuardar(nuevoPedido);
    
    if (!pedidoEditando) {
      setCliente('');
      setProductoId('');
      setCantidad(1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{pedidoEditando ? 'Editar Pedido' : 'Crear Nuevo Pedido'}</h3>
      
      {errorUI && <p style={{ color: '#ff4646', fontWeight: 'bold', margin: 0 }}>{errorUI}</p>}
      
      <input 
        type="text" 
        placeholder="Nombre del Cliente" 
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />
      
      <select 
        value={productoId} 
        onChange={(e) => setProductoId(e.target.value)}
      >
        <option value="">Selecciona un producto...</option>
        {catalogo.map(prod => (
          <option key={prod.id} value={prod.id}>{prod.nombre} - ${prod.precio}</option>
        ))}
      </select>

      <input 
        type="number" 
        min="1" 
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button type="submit">{pedidoEditando ? 'Actualizar' : 'Guardar'}</button>
        {pedidoEditando && (
          <button type="button" className="btn-danger" onClick={onCancelar}>Cancelar</button>
        )}
      </div>
    </form>
  );
}