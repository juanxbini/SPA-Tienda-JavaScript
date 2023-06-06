import {Utils} from '../utils/utils.js'
export class ProductModel {
    constructor() {
      this.Utils = new Utils();
      this.apiUrl = 'http://localhost:3000/api'
    }
  
    // Realiza una solicitud GET a la ruta '/discounted' para obtener los productos con descuento
    async getDiscountedProducts() {
      const url = `${this.apiUrl}/product/discounted`;
      return this.Utils.fetchData(url);
    }
  
    // Realiza una solicitud GET a la ruta '/category/:category' para obtener los productos por categoría
    async getProductsByCategory(category) {
      const url = `${this.apiUrl}/product/category/${category}`;
      return this.Utils.fetchData(url);
    }
  
    // Realiza una solicitud GET a la ruta '/latest/:limit' para obtener los productos más recientes
    async getLatestProducts(limit) {
      const url = `${this.apiUrl}/product/latest/${limit}`;
      return this.Utils.fetchData(url);
    }
  
    // Realiza una solicitud GET a la ruta '/:id' para obtener un producto por su ID
    async getProductById(id) {
      const url = `${this.apiUrl}/product/${id}`;
      return this.Utils.fetchData(url);
    }
  
    // Realiza una solicitud GET a la ruta '/' para obtener todos los productos
    async getAllProducts() {
      const url = `${this.apiUrl}/product`;
      return this.Utils.fetchData(url);
    }
  
    
  }
  

  