import express from 'express';
import productRoutes from './ProductRoute.js';

const router = express.Router();

// Rutas
router.use('/product', productRoutes);

export default router;
