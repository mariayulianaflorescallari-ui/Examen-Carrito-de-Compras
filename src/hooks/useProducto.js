import { useEffect, useState } from "react";
import { fetchProductos } from "../services/fetchProductos";

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setCargando(true);
        setError("");

        const datos = await fetchProductos();
        setProductos(datos);
      } catch (err) {
        setError("No se pudieron cargar los productos.");
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  return {
    productos,
    cargando,
    error,
  };
};