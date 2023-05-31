import express from 'express'; // Importa Express
import ProductController from './controllers/ProductController.js'; // Importa la clase ProductController

const router = express.Router();

// Ruta para buscar un producto por ID
router.get('/:id', ProductController.getProductById);

// Ruta para obtener todos los productos
router.get('/', ProductController.getAllProducts);

// Ruta para buscar productos por categoría
router.get('/category/:category', ProductController.getProductsByCategory);

export default router;
