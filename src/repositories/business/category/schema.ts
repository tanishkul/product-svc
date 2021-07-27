import VersionableSchema from '../../versionable/VersionableSchema';

export default class CategorySchema extends VersionableSchema {
  constructor(options: any, collections: any) {
    const baseSchema = {
      ...options,
      id: {
        required: false,
        type: String,
      },
      name: {
        required: true,
        type: String,
      },
      parentId: {
        default: undefined,
        required: false,
        type: String,
      },
    };
    super(baseSchema, collections);
  }
}
