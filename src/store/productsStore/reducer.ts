const initialState = {
  products: [],
  loading: false,
  filters: {
    _limit: 16,
    _page: 1,
  },
};

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

interface ActionType {
  type: string;
  payload: {
    products: Product[];
    loading: boolean;
    filters: {
      _limit: number;
      _page: number;
    };
  };
}

export const productReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, ...action.payload };
    case "UPDATE_FILTERS":
      return { ...state, filters: action.payload };
    case "START_LOADING":
      return { ...state, loading: true };
    case "END_LOADING":
      return { ...state, loading: false };
    default:
      return state;
  }
};
