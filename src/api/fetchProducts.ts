import { buildParams } from "utils";
import { FilterTypes, ResultType } from "types";

const fetchProducts = async (filters: FilterTypes): Promise<ResultType> => {
  const customFilters = buildParams(filters);

  const url = `https://getir-locals-api.herokuapp.com/products?${customFilters}`;
  const request = await fetch(url);
  const totalCount = Number(request.headers.get("X-Total-Count"));
  const totalPages = Math.ceil(totalCount / 16);
  const response = await request.json();
  return { products: response, totalCount, totalPages };
};

export default fetchProducts;
