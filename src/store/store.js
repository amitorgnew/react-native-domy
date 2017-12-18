import { createStore, combineReducers/* , applyMiddleware*/ } from 'redux';
import navReducer from '../reducers/navreducer';
import appreducer from '../reducers/reducer';
import userData from '../const/data';

const store = createStore(
  combineReducers({
    appreducer,
    nav: navReducer,
  })
);
export default store;
