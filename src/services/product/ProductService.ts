import ProductRepository from '../../repositories/business/product/repository';

class ProductService {
  private productRepository: ProductRepository;

  public constructor() {
    this.productRepository = new ProductRepository();
  }

  public async getProducts(query: any) {
    return {};
  }
}

export default ProductService;
