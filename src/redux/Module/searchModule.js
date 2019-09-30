// 和建立搜索條件相關

//actions
export const actionTypes= {
  ADD_MRT_FILTER: 'ADD_MRT_FILTER',
  DEL_MRT_FILTER: 'DEL_MRT_FILTER',
  ADD_TAG_FILTER: 'ADD_TAG_FILTER',
  DEL_TAG_FILTER: 'DEL_TAG_FILTER',
  MODIFY_KEYWORD: 'MODIFY_KEYWORD'
};

//action creators
export const actions= {
  addMrtFilter: mrt => ({
    type: actionTypes.ADD_MRT_FILTER,
    mrt
  }),
  delMrtFilter: mrt => ({
    type: actionTypes.DEL_MRT_FILTER,
    mrt
  }),
  addTagFilter: tag => ({
    type: actionTypes.ADD_TAG_FILTER,
    tag
  }),
  delTagFilter: tag => ({
    type: actionTypes.DEL_TAG_FILTER,
    tag
  }),
  modifyKeyword: keyword => ({
    type: actionTypes.MODIFY_KEYWORD,
    keyword
  })
};

const initialState={
  mrtFilter: [],
  tagFilter: [],
  keyword: ''
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    default:
      return state
    case actionTypes.ADD_MRT_FILTER:
      return{
        ...state,
        mrtFilter: [...state.mrtFilter, action.mrt ]
      };
    case actionTypes.DEL_MRT_FILTER:
      return{
        ...state,
        mrtFilter: state.mrtFilter.filter( item => item !== action.mrt)
      };
    case actionTypes.ADD_TAG_FILTER:
      return{
        ...state,
        tagFilter: [...state.tagFilter, action.tag ]
      };
    case actionTypes.DEL_TAG_FILTER:
      return{
        ...state,
        tagFilter: state.tagFilter.filter( item => item !== action.tag)
      };
    case actionTypes.MODIFY_KEYWORD:
      return{
        ...state,
        keyword: action.keyword
      };
  }
};

export default reducer;