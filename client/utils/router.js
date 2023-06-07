import { HomeController } from '../controllers/homeController.js';
import { ContactoController } from '../controllers/contactoController.js';
import { ProductController } from '../controllers/productosController.js';

export class Router {
  constructor() {
    this.routes = {
      '/': HomeController,
      '/contacto': ContactoController,
      '/productos': ProductController,
    };
  }

  init() {
    window.addEventListener('hashchange', this.handleRouteChange.bind(this));
    this.handleRouteChange();
  }

  handleRouteChange() {
    const currentRoute = window.location.hash.substring(1) || '/';
    const Controller = this.routes[currentRoute];

    if (Controller) {
      const controller = new Controller();
      controller.index();
    } else {
      this.handleNotFound();
    }
  }

  handleNotFound() {
    console.log('404 NOT FOUND');
    // Acciones para rutas no encontradas
  }
}
