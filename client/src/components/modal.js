import React from 'react';
import ReactDOM from 'react-dom';

const modal = (props) => {
  return ReactDOM.createPortal(
    <div className='ui dimmer modals visible active'>
      <div className='ui standard modal visible active'>
        This is the test modal!
      </div>
    </div>,
    document.querySelector('#modal')
  )
};

export default modal;
