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
        await ProductController.getInstance().productService.getAllProducts({});
      return res.send(successHandler(SUCCESS_MSG.FETCH, result));
    } catch (error) {
      next(error);
    }
  }

  public async getProductsOfSubCategory(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const result =
        await ProductController.getInstance().productService.getAllProducts({
          categoryId: id,
        });
      if (!result.length) {
        return res.send(
          successHandler('No product exists with this sub-category id!', []),
        );
      }
      return res.send(successHandler(SUCCESS_MSG.FETCH, result));
    } catch (error) {
      next(error);
    }
  }

  public async getProductsOfCategory(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const result =
        await ProductController.getInstance().productService.getProductsOfCategory(
          {
            categoryId: id,
          },
        );
      if (!result.length) {
        return res.send(
          successHandler('No product exists with this category id!', []),
        );
      }
      return res.send(successHandler(SUCCESS_MSG.FETCH, result));
    } catch (error) {
      next(error);
    }
  }

  public async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, categoryId } = req.body;
      const result =
        await ProductController.getInstance().productService.create({
          categoryId,
          name,
        });
      return res.send(successHandler(SUCCESS_MSG.CREATE, result));
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController.getInstance();
