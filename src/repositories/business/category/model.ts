import * as mongoose from 'mongoose';

import ICategoryModel from './IModel';
import CategorySchema from './schema';

export const categorySchema = new CategorySchema(
  {
    _id: String,
  },
  {
    collection: 'categories',
    versionKey: false,
  },
);

categorySchema.index({ name: 1, parentId: 1 }, { unique: true });

export const categoryModel: mongoose.Model<ICategoryModel> = mongoose.model<ICategoryModel>(
  'categories',
  categorySchema,
  'categories',
  true,
);
