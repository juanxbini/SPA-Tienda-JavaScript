import { Utils } from '../utils/utils.js'
export class CategoryModel {
    constructor(){
        this.Utils = new Utils(),
        this.apiUrl = 'http://localhost:3000/api'
    }
    async getCategories() {
        const url = `${this.apiUrl}/category`;
        return this.Utils.fetchData(url);
    }
  }
  