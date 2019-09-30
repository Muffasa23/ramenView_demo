import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { actions } from './Module/searchModule';

const store = createStore(
  rootReducer
  
);

store.subscribe(() => console.log(store.getState()));

//store.dispatch(actions.addMrtFilter("fuk"));

export default store;