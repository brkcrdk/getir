import { put, delay } from "redux-saga/effects";
import { fetchProducts } from "api";

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

interface FilterTypes {
  _page: number;
  _limit: number;
}

interface ParamTypes {
  type: string;
  payload: {
    filters: FilterTypes;
  };
}

export function* getProducts(params: ParamTypes) {
  yield put({ type: "START_LOADING" });
  yield delay(3000);
  const data: ResultType = yield fetchProducts(params.payload.filters);
  yield put({ type: "FETCH_PRODUCTS", payload: data });
  yield put({ type: "END_LOADING" });
}

export function* filterProducts(params: ParamTypes) {
  yield put({ type: "START_LOADING" });
  yield delay(3000);
  const data: ResultType = yield fetchProducts(params.payload.filters);
  yield put({ type: "UPDATE_FILTERS", payload: params.payload.filters });
  yield put({ type: "FETCH_PRODUCTS", payload: data });
  yield put({ type: "END_LOADING" });
}
