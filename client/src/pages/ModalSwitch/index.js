import React,{ useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main';
import StoreInfo from '../StoreInfo';
import Modal from '../../components/Modal';

const ModalSwitch = (props) => {
  const previousLocationRef = useRef();
  
  useEffect(() => {
    if(props.history.action == 'POP') previousLocationRef.current = props.location;
  }, [props.location]);

  const previousLocation = previousLocationRef.current; // the '/' path

  console.log(previousLocation);
  
  const isModal = !!(
    /* props.location.state &&
    props.location.state.modal && */
    previousLocation !== props.location
  );
  
  console.log(isModal);

  return(
    <React.Fragment>
      <Switch location={ isModal ? previousLocation : props.location }>
        <Route exact path="/" component={ Main } />
      </Switch>
      { isModal ? <Route path="/store/:id" component={ Modal } />:null }
    </React.Fragment>
    
  )
}


export default ModalSwitch;