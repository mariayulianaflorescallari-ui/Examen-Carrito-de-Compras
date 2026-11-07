const URL_PRODUCTOS = "https://dummyjson.com/products?limit=12";

export async function fetchProductos() {
  const respuesta = await fetch(URL_PRODUCTOS);

  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al obtener los productos`);
  }

  const datos = await respuesta.json();
  return datos.products;
}
