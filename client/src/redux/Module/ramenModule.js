import axios from 'axios';
import qs from 'qs';
import { actionTypes } from './searchModule';

export const actionsTypes = {
  GET_STORE_LIST: 'GET_STORE_LIST',
  GET_STORE_INFO: 'GET_STORE_INFO'  
};

export const ramenActions = {  
  getStoreList: (mrtFilter, tagFilter, keyword) => dispatch => {
    axios
      .get('/api/ramenStore',{
        params:{
          mrtFilter: mrtFilter,
          tagFilter: tagFilter,
          keyword: keyword
        },
        paramsSerializer: params => {
          return qs.stringify(params);
        }
      })
      .then(res => {
        dispatch({
          type: actionsTypes.GET_STORE_LIST,
          payload: res.data
        })}
      );  
  },

  getStoreInfo: (id) => dispatch => {
    axios
      .get(`/api/ramenStore/${id}`)
      .then(res => {
        console.log(res);
        dispatch({
          type: actionsTypes.GET_STORE_INFO,
          payload: res.data
        })
      });
  }
};

const initialState = {
  storeList: [],
  storeInfo: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;   
    case actionsTypes.GET_STORE_LIST:
      return{
        ...state,
        storeList: action.payload
      };
    case actionsTypes.GET_STORE_INFO:
      return{
        ...state,
        storeInfo: action.payload
      };
  }
};


export default reducer;


/* 
.reduce(
          (result, store) => {
            result[store.mrt[0]] = result[store.mrt[0]] || [];
            result[store.mrt[0]].push(store);
            return result;
          },
          []
        )
*/