export default function ProductoCard({ producto, enCarrito, onAgregar, onQuitar }) {
  return (
    <div className={`card${enCarrito ? " en-carrito" : ""}`}>
      <img src={producto.thumbnail} alt={producto.title} />
      <h4>{producto.title}</h4>
      <p className="categoria">{producto.category}</p>
      <p className="precio">$ {producto.price.toFixed(2)}</p>
      {enCarrito ? (
        <button onClick={() => onQuitar(producto.id)}>Quitar</button>
      ) : (
        <button onClick={() => onAgregar(producto)}>Agregar</button>
      )}
    </div>
  );
}
