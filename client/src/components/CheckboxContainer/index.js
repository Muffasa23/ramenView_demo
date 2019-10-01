import React from 'react';
import { connect } from 'react-redux';
import { searchActions } from '../../redux/Module/searchModule';
import { bindActionCreators } from 'redux';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;

    if(isChecked) this.props.addFilter(item);
    else this.props.delFilter(item);    
  }
  
  render() {
    return (
      <React.Fragment>
        {
          this.props.checkboxes.map((item, index) => (
            <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input
                type='checkbox'
                name={ item } 
                onChange={ this.handleChange } 
              />
              <span className="ml-2 text-white">{ item }</span>
            </label>
          ))
        }
      </React.Fragment>
    );
  }
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