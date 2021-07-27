import { RequestParameter } from '../../libs/constants';
import { isValidObjectId } from '../../libs/utilities';

const getAllCategories = {};

const getSubCategories = {
  id: {
    custom: {
      errorMessage: 'Bad id format!',
      options: (id: string) => isValidObjectId(id),
    },
    exists: {
      errorMessage: 'Please Provide id',
    },
    in: [RequestParameter.PARAMS],
  },
};

const createCategory = {
  name: {
    exists: {
      errorMessage: 'Please Provide category name!',
    },
    in: [RequestParameter.BODY],
  },
  parentId: {
    custom: {
      errorMessage: 'parentId is invalid!',
      options: (value: any) => {
        return isValidObjectId(value);
      },
    },
    errorMessage: 'Bad parentId format',
    in: [RequestParameter.BODY],
    optional: true,
  },
};

/*
 * The location of the field, can be one or more of [body, cookies, headers, params, query].
 * If omitted, all request locations will be checked
 * */
export default Object.freeze({
  createCategory,
  getAllCategories,
  getSubCategories,
});
