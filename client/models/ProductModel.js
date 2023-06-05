class ProductModel {
    constructor(apiUrl) {
      this.apiUrl = apiUrl;
    }
  
    // Realiza una solicitud GET a la ruta '/discounted' para obtener los productos con descuento
    async getDiscountedProducts() {
      const url = `${this.apiUrl}/discounted`;
      return this.fetchData(url);
    }
  
    // Realiza una solicitud GET a la ruta '/category/:category' para obtener los productos por categoría
    async getProductsByCategory(category) {
      const url = `${this.apiUrl}/category/${category}`;
      return this.fetchData(url);
    }
  
    // Realiza una solicitud GET a la ruta '/latest/:limit' para obtener los productos más recientes
    async getLatestProducts(limit) {
      const url = `${this.apiUrl}/latest/${limit}`;
      return this.fetchData(url);
    }
  
    // Realiza una solicitud GET a la ruta '/:id' para obtener un producto por su ID
    async getProductById(id) {
      const url = `${this.apiUrl}/${id}`;
      return this.fetchData(url);
    }
  
    // Realiza una solicitud GET a la ruta '/' para obtener todos los productos
    async getAllProducts() {
      const url = `${this.apiUrl}`;
      return this.fetchData(url);
    }
  
    // Método privado para realizar la solicitud y manejar errores de manera centralizada
    async fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error.message);
        throw error;
      }
    }
  }
  
  export default ProductModel;
  