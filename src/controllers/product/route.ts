import { Router } from 'express';

import { validationHandler } from '../../libs/routes/validationHandler';
import productController from './ProductController';
import validation from './validation';

const router = Router();

router
  .route('/')
  .get(
    ...validationHandler(validation.getProducts),
    productController.getProducts,
  );

export default router;
