import { HomeView } from "../views/homeView";


export class HomeController {
    index() {
      console.log('HOME');
      // Acciones para la sección Home
      const homeView = new HomeView();
      homeView.render()
    }
  }
  