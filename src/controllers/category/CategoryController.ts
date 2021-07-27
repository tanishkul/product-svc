import { NextFunction, Request, Response } from 'express';

import { SUCCESS_MSG } from '../../libs/constants';
import successHandler from '../../middlewares/successHandler';
import { CategoryService } from '../../services';

class CategoryController {
  public static getInstance() {
    if (!CategoryController.instance) {
      CategoryController.instance = new CategoryController();
    }

    return CategoryController.instance;
  }
  private static instance: CategoryController;
  private categoryService: CategoryService;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this.categoryService = new CategoryService();
  }

  public async getAllCategories(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result =
        await CategoryController.getInstance().categoryService.getAllCategories(
          {},
        );
      return res.send(successHandler(SUCCESS_MSG.FETCH, result));
    } catch (error) {
      next(error);
    }
  }

  public async getSubCategories(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const result =
        await CategoryController.getInstance().categoryService.getAllCategories(
          { parentId: id },
        );
      if (!result.length) {
        return res.send(
          successHandler('No sub-category exists with this category id!', []),
        );
      }
      return res.send(successHandler(SUCCESS_MSG.FETCH, result));
    } catch (error) {
      next(error);
    }
  }

  public async getMainCategories(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result =
        await CategoryController.getInstance().categoryService.getAllCategories(
          { parentId: null },
        );
      if (!result.length) {
        return res.send(successHandler('No Category exists!', []));
      }
      return res.send(successHandler(SUCCESS_MSG.FETCH, result));
    } catch (error) {
      next(error);
    }
  }

  public async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, parentId = null } = req.body;
      const result =
        await CategoryController.getInstance().categoryService.createCategory({
          name,
          parentId,
        });
      return res.send(successHandler(SUCCESS_MSG.CREATE, result));
    } catch (error) {
      next(error);
    }
  }
}

export default CategoryController.getInstance();
