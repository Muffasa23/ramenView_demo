import axios from 'axios';
import qs from 'qs';

export const actionsTypes = {
  GET_STORE_LIST: 'GET_STORE_LIST',  
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
      
      
  } 
  /* getStoreList: (mrtFilter, tagFilter) => {
    return {
      type: actionsTypes.GET_STORE_LIST,
      payload: mrtFilter
    }
  } */
};

const initialState = {
  storeList:[]
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