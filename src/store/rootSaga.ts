import { takeEvery } from "redux-saga/effects";
// import getProducts from "./actions/getProducts";
// import filterProducts from "./actions/filterProducts";
import { filterProducts, getProducts } from "./productsStore/actions";
export default function* rootSaga() {
  yield takeEvery("FETCH_PRODUCTS_REQUESTED", getProducts);
  yield takeEvery("UPDATE_PRODUCTS_REQUESTED", filterProducts);
}
