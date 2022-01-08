import { ProductType } from "types";

const initialState = {
  products: [],
  loading: false,
  filters: {
    _limit: 16,
    _page: 1,
  },
};

interface ActionType {
  type: string;
  payload: {
    products: ProductType[];
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
