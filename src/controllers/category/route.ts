import { Router } from 'express';

import { validationHandler } from '../../libs/routes/validationHandler';
import categoryController from './CategoryController';
import validation from './validation';

const router = Router();

router
  .route('/')
  .get(
    ...validationHandler(validation.getAllCategories),
    categoryController.getAllCategories,
  );

router
  .route('/sub/:id')
  .get(
    ...validationHandler(validation.getSubCategories),
    categoryController.getSubCategories,
  );

router
  .route('/main/')
  .get(
    ...validationHandler(validation.getAllCategories),
    categoryController.getMainCategories,
  );

router
  .route('/')
  .post(
    ...validationHandler(validation.createCategory),
    categoryController.createCategory,
  );

export default router;
