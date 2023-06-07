import { ProductView } from "../views/productosView.js";
import { Utils } from "../utils/utils.js";
import { CategoryModel } from "../models/CategoryModel.js";
import { ProductModel } from "../models/ProductModel.js";

export class ProductController {
  constructor() {
    this.productView = new ProductView();
    this.utils = new Utils();
    this.categoryModel = new CategoryModel();
    this.productModel = new ProductModel();
  }

  index() {
  
    // Cargar el template de productos
    
    const productosTemplatePromise = this.utils.fetchTemplate('http://localhost/client/template/productos/productos-template.hbs');

    // Obtener las categorías de productos
   
    const categoriesPromise = this.categoryModel.getCategories();

    // Obtener todos los productos por defecto
    
    const productsPromise = this.productModel.getAllProducts();
    
    // Renderizar la vista de productos una vez que el template, las categorías y los productos estén disponibles
    
    Promise.all([productosTemplatePromise, categoriesPromise, productsPromise])
      .then(([productosTemplateText, categoriesData, productsData]) => {
        this.productView.render(productosTemplateText, categoriesData, productsData);
      })
      .catch(error => {
        console.error('Error al cargar el template de productos:', error);
      });
  }
}



