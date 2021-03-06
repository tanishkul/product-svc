import VersionableSchema from '../../versionable/VersionableSchema';

export default class ProductSchema extends VersionableSchema {
  constructor(options: any, collections: any) {
    const baseSchema = {
      ...options,
      categoryId: {
        required: true,
        type: String,
      },
      id: {
        required: false,
        type: String,
      },
      name: {
        required: true,
        type: String,
      },
    };
    super(baseSchema, collections);
  }
}
