import connection from './Connection.js';

class Product {

  //Metodo para serializar productos
  serializeProduct(product) {
    return {
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      categoria: product.categoria,
      descuento: product.descuento,
      stock: product.stock
    };
  }

  // Método para listar todos los productos
  async listProducts() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products';

      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Método para obtener un producto por su id
  async oneProduct(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products WHERE id = ?';

      connection.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }
  // Método para obtener productos con descuento
  async getDiscountedProducts() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products WHERE descuento IS NOT NULL';

      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  //Metodo para obtener los productos segun su categoria
  async getProductsByCategory(category) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products WHERE categoria = ?';

      connection.query(query, [category], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  //Metodo para obtener los ultimos productos agregados
  async getLatestProducts(limit) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products ORDER BY id DESC LIMIT ?';

      connection.query(query, [+limit], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

export default Product;



