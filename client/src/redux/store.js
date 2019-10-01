import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { actions } from './Module/searchModule';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(() => console.log(store.getState()));

//store.dispatch(actions.addMrtFilter("fuk"));

export default store;