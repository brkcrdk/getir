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

export interface FilterTypes {
  _page?: number;
  _limit?: number;
  _sort?: string | null;
  _order?: string | null;
  manufacturer_like?: string[] | null;
  tags_like?: string[] | null;
  itemType?: string;
}

export interface SidebarTypes {
  isOpen: boolean;
  sidebarPosition?: string;
  sidebarContent?: React.ReactNode | null;
}

export interface BasketType {
  count: number;
  item: ProductType;
}

export interface BasketTypes {
  basket: BasketType[];
}

export interface StoreTypes {
  productStore: {
    products: ProductType[];
    loading: boolean;
    filters: FilterTypes;
    totalCount: number;
    totalPages: number;
  };
  sidebarStore: SidebarTypes;
  basketStore: BasketTypes;
}

export const actionTypes = {
  productStore: {
    FETCH_PRODUCTS_REQUESTED: "FETCH_PRODUCTS_REQUESTED",
    UPDATE_PRODUCTS_REQUESTED: "UPDATE_PRODUCTS_REQUESTED",
    FETCH_PRODUCTS: "FETCH_PRODUCTS",
    UPDATE_FILTERS: "UPDATE_FILTERS",
    START_LOADING: "START_LOADING",
    END_LOADING: "END_LOADING",
  },
  sidebarStore: {
    CLOSE_SIDEBAR: "CLOSE_SIDEBAR",
    OPEN_SIDEBAR: "OPEN_SIDEBAR",
  },
  basketStore: {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
    INCREMENT_COUNT: "INCREMENT_COUNT",
    DECREMENT_COUNT: "DECREMENT_COUNT",
  },
};
