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

router
  .route('/category/:id')
  .get(
    ...validationHandler(validation.getProductsOfCategory),
    productController.getProductsOfCategory,
  );

router
  .route('/subcategory/:id')
  .get(
    ...validationHandler(validation.getProductsOfCategory),
    productController.getProductsOfSubCategory,
  );

router
  .route('/')
  .post(
    ...validationHandler(validation.createProducts),
    productController.createProduct,
  );

export default router;
