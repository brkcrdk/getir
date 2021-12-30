import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import { productReducer } from "./productsStore/reducer";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  productStore: productReducer,
});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
