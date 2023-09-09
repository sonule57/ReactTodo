import React from 'react';

import { useState } from 'react';
import Backdrop1 from './Backdrop1';
import Modal1 from './Modal1';
const Todo1 = (props) => {

    const[modalHandle, setModalHandle] = useState(false)

     const deleteHandler =()=>{
        setModalHandle(true)

     }

     const closeModal = ()=>{
        setModalHandle(false)
     }
       
     return (
    <div className='listTemplate' >
       <h2>{props.text}</h2>
       <button type='button' className='btn btn-primary' onClick={deleteHandler}>Delete</button>
    
    {modalHandle && <Backdrop1 onCancel={closeModal}/>}
    {modalHandle && <Modal1 onCancel={closeModal} onConfirm={closeModal}/>}
    </div>
  )
}

export default Todo1;