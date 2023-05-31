import express from 'express';
import productRoutes from './ProductRoutes';

const router = express.Router();

// Rutas
router.use('/product', productRoutes);

export default router;
