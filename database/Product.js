import connection from './Connection.js'; // Importa la biblioteca de conexión a la base de datos SQL

class Product {
  constructor(id, nombre, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }

  static getAllProducts(callback) {
    // Consulta para obtener todos los productos
    const query = 'SELECT * FROM products';

    // Ejecuta la consulta
    connection.query(query, (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }

      // Transforma los resultados en instancias de la clase Product
      const products = results.map((row) => {
        return new Product(row.id, row.nombre, row.precio, row.categoria);
      });

      callback(null, products);
    });
  }

  static getProductsByCategory(category, callback) {
    // Consulta para obtener productos según la categoría seleccionada
    const query = `SELECT * FROM products WHERE categoria = ${category}`;

    // Ejecuta la consulta con la categoría como parámetro
    connection.query(query, [category], (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }

      // Transforma los resultados en instancias de la clase Product
      const products = results.map((row) => {
        return new Product(row.id, row.nombre, row.precio, row.categoria);
      });

      callback(null, products);
    });
  }

  static sortProductsBy(field, direction, callback) {
    // Consulta para ordenar productos según el campo y dirección especificados
    const query = `SELECT * FROM products ORDER BY ${field} ${direction}`;

    // Ejecuta la consulta
    connection.query(query, (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }

      // Transforma los resultados en instancias de la clase Product
      const products = results.map((row) => {
        return new Product(row.id, row.nombre, row.precio, row.categoria);
      });

      callback(null, products);
    });
  }
}

export default Product;
