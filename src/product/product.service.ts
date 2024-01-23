import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [];

  create(product: Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }
}
