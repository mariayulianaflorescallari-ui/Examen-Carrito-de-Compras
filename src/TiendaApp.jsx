import { useState } from "react";
import { useProductos } from "./hooks/useProductos";
import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

export default function TiendaApp() {
  const { productos, cargando, error } = useProductos();
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    setCarrito((actual) =>
      actual.some((item) => item.id === producto.id) ? actual : [...actual, producto]
    );
  };

  const quitar = (id) => {
    setCarrito((actual) => actual.filter((item) => item.id !== id));
  };

  const vaciar = () => setCarrito([]);

  return (
    <div>
      <h1>Mini Tienda</h1>

      {cargando && (
        <div className="layout">
          <p className="mensaje">Cargando...</p>
        </div>
      )}

      {!cargando && error && (
        <div className="layout">
          <p className="mensaje error">{error}</p>
        </div>
      )}

      {!cargando && !error && (
        <div className="layout">
          <ProductoList productos={productos} carrito={carrito} onAgregar={agregar} onQuitar={quitar} />
          <CarritoPanel carrito={carrito} onQuitar={quitar} onVaciar={vaciar} />
        </div>
      )}
    </div>
  );
}
