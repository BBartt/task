import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
// import { RootState, AppDispatch } from './store';
import { all } from "redux-saga/effects";

import reducer from "./reducers";
import rootSaga from "./sagas";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  app: reducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;

function* rootSagaCombined() {
  yield all([rootSaga()]);
}

sagaMiddleware.run(rootSagaCombined);

// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
