import React from 'react';
import { connect } from 'react-redux';
import { searchActions } from '../../redux/Module/searchModule';
import { bindActionCreators } from 'redux';

const CheckboxContainer = (props) => {
  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;

    if(isChecked) props.addFilter(item);
    else props.delFilter(item);    
  }

  return(
    <React.Fragment>
      {
        props.checkboxes.map((item, index) => (
          <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
            <input
              type='checkbox'
              name={ item } 
              onChange={ handleChange } 
            />
            <span className="ml-2 text-white">{ item }</span>
          </label>
        ))
      }
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  if(ownProps.criteria === "mrt") return { checkedItems: state.search.mrtFilter}
  else if(ownProps.criteria === "tag") return { checkedItems: state.search.tagFilter }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  
  if(ownProps.criteria === "mrt"){
    return { 
      addFilter: bindActionCreators(searchActions.addMrtFilter, dispatch),
      delFilter: bindActionCreators(searchActions.delMrtFilter, dispatch)
    }
  } 
  else if(ownProps.criteria === "tag"){
    return { 
      addFilter: bindActionCreators(searchActions.addTagFilter, dispatch),
      delFilter: bindActionCreators(searchActions.delTagFilter, dispatch)
    }
  } 
}



export default connect(mapStateToProps, mapDispatchToProps)(CheckboxContainer);