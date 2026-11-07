export default function CarritoPanel({ carrito, onQuitar, onVaciar }) {
  const total = carrito.reduce((suma, item) => suma + item.price, 0);

  return (
    <aside className="carrito">
      <h3>Carrito ({carrito.length})</h3>

      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <span>
                {item.title} - $ {item.price.toFixed(2)}
              </span>
              <button onClick={() => onQuitar(item.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}

      <p className="total">Total: $ {total.toFixed(2)}</p>
      <button onClick={onVaciar} disabled={carrito.length === 0}>
        Vaciar carrito
      </button>
    </aside>
  );
}
