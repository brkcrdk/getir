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

export const actionTypes = {
  productStore: {
    FETCH_PRODUCTS_REQUESTED: "FETCH_PRODUCTS_REQUESTED",
    UPDATE_PRODUCTS_REQUESTED: "UPDATE_PRODUCTS_REQUESTED",
  },
};

export interface SidebarTypes {
  isOpen: boolean;
  sidebarPosition?: string;
  sidebarContent?: React.ReactNode | null;
}
