import { HomeView } from "../views/homeView.js";
import { Utils } from "../utils/utils.js"
import { ProductModel } from "../models/ProductModel.js"

export class HomeController {
  constructor() {
    this.homeView = new HomeView(),
    this.utils = new Utils(),
    this.productModel = new ProductModel()
  }
  index() {
    // Acciones para la sección Home

    // Cargar los templates de las secciones
    const homeTemplatePromise = this.utils.fetchTemplate('http://localhost/client/template/home/home-template.hbs');
    const latestArticleTemplatePromise = this.utils.fetchTemplate('http://localhost/client/template/home/partials/latest-article-template.hbs');
    const promotionalProductsTemplatePromise = this.utils.fetchTemplate('http://localhost/client/template/home/partials/promotional-products-template.hbs');

    // Obtener datos del modelo
    const latestArticles = this.productModel.getLatestProducts(5);
    const promotionalProducts = this.productModel.getDiscountedProducts();

    // Renderizar la sección Home una vez que los templates y los datos estén disponibles
    Promise.all([homeTemplatePromise, latestArticleTemplatePromise, promotionalProductsTemplatePromise, latestArticles,promotionalProducts])
      .then(([homeTemplateText, latestArticleTemplateText, promotionalProductsTemplateText]) => {
        console.log(latestArticles, promotionalProducts)
        console.log('hola',homeTemplateText, latestArticleTemplateText,promotionalProductsTemplateText)
        this.homeView.render(homeTemplateText, latestArticleTemplateText, promotionalProductsTemplateText, latestArticles, promotionalProducts);
      })
      .catch(error => {
        console.error('Error al cargar los templates:', error);
      });
  }
}

