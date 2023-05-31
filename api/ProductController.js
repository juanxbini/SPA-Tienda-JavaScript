import Product from '../database/Product'; // Importa la clase Product del modelo
import connection from '../database/connection'; // Importa la biblioteca de conexión a la base de datos SQL

class ProductController {
  static getProductById(req, res) {
    const { id } = req.params;

    // Utiliza el método estático del modelo para buscar un producto por ID
    Product.getProductById(id, (err, product) => {
      if (err) {
        console.error('Error al buscar el producto:', err);
        res.status(500).json({ error: 'Error al buscar el producto' });
        return;
      }

      if (!product) {
        res.status(404).json({ error: 'Producto no encontrado' });
        return;
      }

      res.json(product);
    });
  }

  static getAllProducts(req, res) {
    // Utiliza el método estático del modelo para obtener todos los productos
    Product.getAllProducts((err, products) => {
      if (err) {
        console.error('Error al obtener los productos:', err);
        res.status(500).json({ error: 'Error al obtener los productos' });
        return;
      }

      res.json(products);
    });
  }

  static getProductsByCategory(req, res) {
    const { category } = req.params;

    // Utiliza el método estático del modelo para obtener productos por categoría
    Product.getProductsByCategory(category, (err, products) => {
      if (err) {
        console.error('Error al obtener los productos por categoría:', err);
        res.status(500).json({ error: 'Error al obtener los productos por categoría' });
        return;
      }

      res.json(products);
    });
  }
}

export default ProductController;
