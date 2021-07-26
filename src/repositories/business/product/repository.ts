import * as mongoose from 'mongoose';

import VersioningRepository from '../../versionable/VersioningRepository';
import IProductModel from './IModel';
import { productModel } from './model';

export default class ProductRepository extends VersioningRepository<
  IProductModel,
  mongoose.Model<IProductModel>
> {
  constructor() {
    super(productModel);
  }

  public async getQuery(options: any): Promise<IProductModel[]> {
    console.log('Product - Get query: ', options);
    return super.getAll(options, {});
  }
}
