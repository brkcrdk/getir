import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

// const initialState = {
//   products: [],
//   loading: false,
//   filters: {
//     _limit: 16,
//     _page: 1,
//   },
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_PRODUCTS":
//       return { ...state, ...action.payload };
//     case "UPDATE_FILTERS":
//       return { ...state, filters: action.payload };
//     case "START_LOADING":
//       return { ...state, loading: true };
//     case "END_LOADING":
//       return { ...state, loading: false };
//     default:
//       return state;
//   }
// };

// export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);
