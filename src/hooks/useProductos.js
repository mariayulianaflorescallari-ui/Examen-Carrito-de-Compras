import { useEffect, useState } from "react";
import { fetchProductos } from "../services/fetchProductos";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let activo = true;

    fetchProductos()
      .then((lista) => {
        if (activo) setProductos(lista);
      })
      .catch(() => {
        if (activo) setError("No se pudieron cargar los productos. Revisa tu conexión e intenta de nuevo.");
      })
      .finally(() => {
        if (activo) setCargando(false);
      });

    return () => {
      activo = false;
    };
  }, []);

  return { productos, cargando, error };
}
