import express from 'express';
import ProductController from '../ProductController.js';

const router = express.Router();
const productController = new ProductController();

router.get('/discounted', async (req, res) => {
    await productController.getDiscountedProducts(req, res);
});
router.get('/category/:category', async (req, res) => {
    await productController.getProductsByCategory(req, res);
});
router.get('/latest/:limit', async (req, res) => {
    await productController.getLatestProducts(req, res);
});
router.get('/:id', async (req, res) => {
    await productController.getProductById(req, res);
});

router.get('/', async (req, res) => {
    await productController.getAllProducts(req, res);
});

export default router;

