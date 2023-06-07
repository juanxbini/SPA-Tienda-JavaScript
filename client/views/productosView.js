import { ProductModel } from "../models/ProductModel.js";

export class ProductView {
  constructor() {
    // Crear una instancia del modelo de productos
    this.productModel = new ProductModel();
    
    // Inicializar el contexto con categorías y productos vacíos
    this.contexto = {
      categorias: [],
      productos: []
    };
    
    // Inicializar la lista de categorías
    this.categories = [];
  }
  
  render(productosTemplateText, categoriesData, productsData) {
    // Compilar el template de productos
    const productosTemplate = Handlebars.compile(productosTemplateText);

    // Modificar el contexto con los datos extraídos en el controlador
    this.categories = categoriesData;
    this.contexto = {
      categorias: this.categories,
      productos: productsData
    };

    // Mostrar el HTML de los productos
    this.showProductosHtml(productosTemplate);
  }

  showProductosHtml(productosTemplate) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Generar el HTML utilizando el template y el contexto
    const productosHtml = productosTemplate(this.contexto);

    // Insertar el HTML en el div "content" del HTML principal
    contentDiv.innerHTML = productosHtml;
    
    // Obtener los enlaces de categoría
    const categoryLinks = document.querySelectorAll('.category-link');

    // Asignar el evento click a cada enlace
    categoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const categoryName = link.dataset.categoria;
        this.getProductsByCategory(categoryName, productosTemplate);
      });
    });
  }

  getProductsByCategory(category, productosTemplate) {
    this.productModel.getProductsByCategory(category)
      .then(productsData => {
        // Actualizar el contexto con las categorías y productos obtenidos
        this.contexto = {
          categorias: this.categories,
          productos: productsData
        };

        // Mostrar el HTML de los productos actualizado
        this.showProductosHtml(productosTemplate);
      })
      .catch(error => {
        console.error('Error al obtener los productos por categoría:', error);
      });
  }
}



