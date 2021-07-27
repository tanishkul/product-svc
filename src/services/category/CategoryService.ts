import CategoryRepository from '../../repositories/business/category/repository';

class CategoryService {
  private categoryRepository: CategoryRepository;

  public constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  public async getAllCategories(query: any) {
    return this.categoryRepository.getQuery(query);
  }

  public async createCategory(query: any) {
    return this.categoryRepository.create(query);
  }
}

export default CategoryService;
