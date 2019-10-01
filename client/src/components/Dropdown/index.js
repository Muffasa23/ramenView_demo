import React from 'react';

class Dropdown extends React.Component{
  render(){
    return(
      <div class="relative">
        <button type="button" class="block focus:outline-none">
          
        </button>
        <div>
          <button type="button" class="z-30 block fixed inset-0 w-full h-full cursor-default"></button>
          <div class="absolute z-40 right-0">
            
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdown;