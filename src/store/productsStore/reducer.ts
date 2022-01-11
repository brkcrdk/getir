import { ProductType, FilterTypes, actionTypes } from "types";

const initialState = {
  products: [],
  loading: true,
  filters: {
    _limit: 16,
    _page: 1,
    _sort: "price",
    _order: "asc",
    itemType: "mug",
  },
};

interface ActionType {
  type: string;
  payload: {
    products: ProductType[];
    loading: boolean;
    filters: FilterTypes;
  };
}

export const productReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.productStore.FETCH_PRODUCTS:
      return { ...state, ...action.payload };
    case actionTypes.productStore.UPDATE_FILTERS:
      return { ...state, filters: action.payload };
    case actionTypes.productStore.START_LOADING:
      return { ...state, loading: true };
    case actionTypes.productStore.END_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
