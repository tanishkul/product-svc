import * as mongoose from 'mongoose';

import VersioningRepository from '../../versionable/VersioningRepository';
import ICategoryModel from './IModel';
import { categoryModel } from './model';

export default class CategoryRepository extends VersioningRepository<
  ICategoryModel,
  mongoose.Model<ICategoryModel>
> {
  constructor() {
    super(categoryModel);
  }

  public async getQuery(options: any): Promise<ICategoryModel[]> {
    console.log('Category - Get query: ', options);
    return super.getAll(options, {});
  }

  public async aggregateFunction(options: any): Promise<ICategoryModel[]> {
    console.log('Category - Get query: ', options);
    return super.getAll(options, {});
  }
}
