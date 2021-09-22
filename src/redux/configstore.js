import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import covidReducer from './covid';
import detailsReducer from './details';

export const reducer = combineReducers({
  covidReducer,
  detailsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
