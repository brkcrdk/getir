export interface FilterTypes {
  _page: number;
  _limit: number;
}

export interface ProductType {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}

export interface ResultType {
  products: ProductType[];
  totalCount: number;
  totalPages: number;
}
