import Product from '../database/Product.js';

class ProductController {
  // Método para obtener todos los productos
  async getAllProducts(req, res) {
    try {
      const productModel = new Product();
      const products = await productModel.listProducts();

      // Serializar los productos seleccionando las propiedades deseadas
      const serializedProducts = products.map((product) => ({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        categoria: product.categoria,
        stock: product.stock,
        descuento: product.descuento
      }));

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(serializedProducts));
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  }

  // Método para obtener un producto por su id
  async getProductById(req, res) {
    const { id } = req.params;

    try {
      const productModel = new Product();
      const product = await productModel.oneProduct(id);

      if (!product) {
        res.status(404).json({ error: 'Producto no encontrado' });
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(product));
      }
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      res.status(500).json({ error: 'Error al obtener el producto' });
    }
  }
  // Método para obtener productos con descuento
  async getDiscountedProducts(req, res) {
    try {
      const productModel = new Product();
      const products = await productModel.getDiscountedProducts();

      const serializedProducts = products.map((product) => ({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        categoria: product.categoria,
        descuento: product.descuento,
      }));

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(serializedProducts));
    } catch (error) {
      console.error('Error al obtener los productos con descuento:', error);
      res.status(500).json({ error: 'Error al obtener los productos con descuento' });
    }
  }
  // Método para obtener productos segun su categoria
  async getProductsByCategory(req, res) {
    const { category } = req.params;

    try {
      const productModel = new Product();
      const products = await productModel.getProductsByCategory(category);

      if (products.length === 0) {
        res.status(404).json({ error: 'No se encontraron productos en esta categoría' });
      } else {
        const serializedProducts = products.map((product) => ({
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          categoria: product.categoria,
        }));

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(serializedProducts));
      }
    } catch (error) {
      console.error('Error al obtener los productos por categoría:', error);
      res.status(500).json({ error: 'Error al obtener los productos por categoría' });
    }
  }
  //metodo para obtener los ultimos productos agregados
  async getLatestProducts(req, res) {
    const { limit } = req.params;

    try {
      const productModel = new Product();
      const products = await productModel.getLatestProducts(limit);

      if (products.length === 0) {
        res.status(404).json({ error: 'No se encontraron productos' });
      } else {
        const serializedProducts = products.map((product) => ({
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          categoria: product.categoria,
        }));

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(serializedProducts));
      }
    } catch (error) {
      console.error('Error al obtener los últimos productos:', error);
      res.status(500).json({ error: 'Error al obtener los últimos productos' });
    }
  }
}

export default ProductController;



