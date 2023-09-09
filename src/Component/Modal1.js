import React from 'react';

const Modal1 = (props) => {

    const confirmHandler =()=>{
        props.onConfirm();

    }

    const cancelHandler =()=>{
        props.onCancel();

    }
  return (
    <div className='mymodal'>
        
        <h3>Are you Sure?</h3>
        <button type='button' className='btn btn-outline-primary' onClick={cancelHandler}>Cancel</button>
        <button type='button'className='btn btn-outline-primary' onClick={confirmHandler}>Confirm</button>
    </div>
  )
}

export default Modal1;