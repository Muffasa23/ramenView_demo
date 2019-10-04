import React from 'react';
import StoreInfo from '../../pages/StoreInfo';

const Modal = ({ match, history }) => {
  
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div onClick={ back } className="absolute inset-0 bg-modal z-0 flex items-center  justify-center" >
      <div className="bg-white z-10 w-4/6 h-80pc rounded overflow-y-auto">
        <div className="flex justify-end px-4 mt-4">
          <svg className="cursor-pointer hover:text-indigo-500 stroke-current" onClick={ back } viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <StoreInfo storeId={ match.params.id } />
      </div>
    </div>
  );
}

export default Modal;