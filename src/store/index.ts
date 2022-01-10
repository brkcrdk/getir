import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import { productReducer } from "./productsStore/reducer";
import { sidebarReducer } from "./sidebarStore/reducer";
import { basketReducer } from "./basketStore/reducer";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  productStore: productReducer,
  sidebarStore: sidebarReducer,
  basketStore: basketReducer,
});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
