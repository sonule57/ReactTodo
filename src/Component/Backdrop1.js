import React from 'react';

const Backdrop1 = (props) => {
  return (
    <div className='backdrop' onClick={props.onCancel}></div>
  )
}

export default Backdrop1;