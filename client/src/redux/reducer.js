import { combineReducers } from 'redux';
import search from './Module/searchModule';
import ramen from './Module/ramenModule';

export default combineReducers({
  search,
  ramen
});
