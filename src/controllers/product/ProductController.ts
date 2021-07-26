import { NextFunction, Request, Response } from 'express';

import { SUCCESS_MSG } from '../../libs/constants';
import successHandler from '../../middlewares/successHandler';
import { ProductService } from '../../services';

class ProductController {
  public static getInstance() {
    if (!ProductController.instance) {
      ProductController.instance = new ProductController();
    }

    return ProductController.instance;
  }
  private static instance: ProductController;
  private productService: ProductService;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this.productService = new ProductService();
  }

  public async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const result =
        await ProductController.getInstance().productService.getProducts({
        });
      return res.send(successHandler(SUCCESS_MSG.FETCH_SLOTS, result));
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController.getInstance();
