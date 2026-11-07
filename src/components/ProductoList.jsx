import ProductoCard from "./ProductoCard";

export default function ProductoList({ productos, carrito, onAgregar, onQuitar }) {
  return (
    <div className="grid">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          enCarrito={carrito.some((item) => item.id === producto.id)}
          onAgregar={onAgregar}
          onQuitar={onQuitar}
        />
      ))}
    </div>
  );
}
