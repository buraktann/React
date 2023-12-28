import { GetAllProductsModel } from "../models/responses/GetAllProductsModel";
import axios from "axios";
import { ProductModel } from "../models/responses/ProductModel";
class ProductService {
  getAll() {
    return axios.get<GetAllProductsModel>("https://dummyjson.com/products");
  }

  getById(id: number) {
    return axios.get<ProductModel>("https://dummyjson.com/products/" + id);
  }
}

export default ProductService;
