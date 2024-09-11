import { executeUseCase, TRequestContext } from '@server/Application';
import {
  CreateProduct,
  DeleteProduct,
  GetAllProducts,
  GetProduct,
  GetSomeInfoProduct,
  GetStockProduct,
  IGetSomeInfoProductInput,
  IUpdateStockInput,
  Product,
  UpdateStock,
} from '../Domain';

interface ICreateProduct {
  name: string;
  description: string;
  stock: number;
  price: number;
}

export class ProductsService {
  constructor(
    private readonly _createProduct: CreateProduct,
    private readonly _deleteProduct: DeleteProduct,
    private readonly _getAllProducts: GetAllProducts,
    private readonly _updateStock: UpdateStock,
    private readonly _getStock: GetStockProduct,
    private readonly _getProduct: GetProduct,
    private readonly _getInfo: GetSomeInfoProduct,
  ) {}

  async createProduct(
    input: ICreateProduct,
    requestContext: TRequestContext,
  ): Promise<Product> {
    return executeUseCase(this._createProduct, input, requestContext);
  }

  async deleteProduct(
    id: string,
    requestContext: TRequestContext,
  ): Promise<Product> {
    return executeUseCase(this._deleteProduct, id, requestContext);
  }

  async getAllProducts(requestContext: TRequestContext): Promise<Product[]> {
    return executeUseCase(this._getAllProducts, requestContext);
  }

  async updateStock(
    { id, stock }: IUpdateStockInput,
    requestContext: TRequestContext,
  ) {
    return executeUseCase(this._updateStock, { id, stock }, requestContext);
  }

  async getStock(
    id: string,
    requestContext: TRequestContext,
  ): Promise<number | null> {
    return executeUseCase(this._getStock, id, requestContext);
  }

  async getProduct(
    id: string,
    requestContext: TRequestContext,
  ): Promise<Product | null> {
    return executeUseCase(this._getProduct, id, requestContext);
  }

  async getSomeInfoProduct(
    input: IGetSomeInfoProductInput,
    requestContext: TRequestContext,
  ): Promise<Record<string, unknown> | null> {
    return executeUseCase(this._getInfo, input, requestContext);
  }
}
