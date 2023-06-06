import { HomeView } from "../views/homeView.js";
import { Utils } from "../utils/utils.js"
import { ProductModel } from "../models/ProductModel.js"

export class HomeController {
  constructor() {
    this.homeView = new HomeView(),
    this.utils = new Utils(),
    this.productModel = new ProductModel('http:/localhost:3000/api')
  }
  index() {
    // Acciones para la sección Home

    // Cargar los templates de las secciones
    const homeTemplatePromise = this.utils.fetchTemplate('template/home/home-template.hbs');
    const latestArticleTemplatePromise = this.utils.fetchTemplate('template/home/latest-article-template.hbs');
    const promotionalProductsTemplatePromise = this.utils.fetchTemplate('template/home/promotional-products-template.hbs');

    // Obtener datos del modelo
    const latestArticles = this.productModel.getLatestProducts();
    const promotionalProducts = this.productModel.getDiscountedProducts();

    // Renderizar la sección Home una vez que los templates y los datos estén disponibles
    Promise.all([homeTemplatePromise, latestArticleTemplatePromise, promotionalProductsTemplatePromise])
      .then(([homeTemplateText, latestArticleTemplateText, promotionalProductsTemplateText]) => {
        this.homeView.render(homeTemplateText, latestArticleTemplateText, promotionalProductsTemplateText, latestArticles, promotionalProducts);
      })
      .catch(error => {
        console.error('Error al cargar los templates:', error);
      });
  }
}

