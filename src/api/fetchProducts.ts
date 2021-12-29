import { buildParams } from "utils";

interface FilterTypes {
  _page: number;
  _limit: number;
}

interface Product {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}

interface ResultType {
  products: Product[];
  totalCount: number;
  totalPages: number;
}

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
