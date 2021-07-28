import { RequestParameter } from '../../libs/constants';
import { isValidObjectId } from '../../libs/utilities';

const getProducts = {};

const getProductsOfCategory = {
  id: {
    custom: {
      errorMessage: 'Bad id format!',
      options: (id: string) => isValidObjectId(id),
    },
    exists: {
      errorMessage: 'Please provide id',
    },
    in: [RequestParameter.PARAMS],
  },
};

const createProducts = {
  categoryId: {
    custom: {
      errorMessage: 'categoryId is invalid!',
      options: (value: any) => {
        return isValidObjectId(value);
      },
    },
    exists: {
      errorMessage: 'Please provide product categoryId!',
    },
    in: [RequestParameter.BODY],
  },
  name: {
    exists: {
      errorMessage: 'Please provide product name!',
    },
    in: [RequestParameter.BODY],
  },
};

/*
 * The location of the field, can be one or more of [body, cookies, headers, params, query].
 * If omitted, all request locations will be checked
 * */
export default Object.freeze({
  createProducts,
  getProducts,
  getProductsOfCategory,
});
