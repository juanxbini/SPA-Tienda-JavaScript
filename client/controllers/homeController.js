import { HomeView } from "../views/homeView.js";


export class HomeController {
  constructor(){
    this.homeView = new HomeView()
  }
    index() {
      // Acciones para la sección Home
      this.homeView.render()
    }
  }
  
