import CategoryRepository from '../../repositories/business/category/repository';
import ProductRepository from '../../repositories/business/product/repository';
class ProductService {
  private categoryRepository: CategoryRepository;
  private productRepository: ProductRepository;

  public constructor() {
    this.productRepository = new ProductRepository();
    this.categoryRepository = new CategoryRepository();
  }

  public async getAllProducts(query: any) {
    const { categoryId } = query;
    if (categoryId) {
      const subCategory = await this.categoryRepository.getQuery({
        originalId: categoryId,
        parentId: { $ne: undefined },
      });
      if (!subCategory.length) {
        throw {
          message: 'categoryId is not a subCategory',
          type: 'BadRequestError',
        };
      }
    }
    return this.productRepository.getQuery(query);
  }

  public async getProductsOfCategory(query: any) {
    const { categoryId } = query;

    const subCategory = await this.categoryRepository.getQuery({
      parentId: categoryId,
    });
    if (!subCategory.length) {
      throw {
        message: 'sub-category does not exist with this id',
        type: 'BadRequestError',
      };
    }
    const categoryIds = subCategory.map((item) => item.originalId);
    return this.productRepository.getQuery({ categoryId: { $in: categoryIds } });
  }

  public async create(query: any) {
    const { categoryId } = query;
    const subCategory = await this.categoryRepository.getQuery({
      originalId: categoryId,
      parentId: { $ne: undefined },
    });
    if (!subCategory.length) {
      throw {
        message: 'categoryId is not a subCategory',
        type: 'BadRequestError',
      };
    }
    return this.productRepository.create(query);
  }
}

export default ProductService;
