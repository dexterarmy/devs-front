import React, {useState} from 'react';
import ReactDom from 'react-dom';
import '../App.css';

const Modal  = ({show , setShow,children, isBlocking, onClose}:any) => {

    if(!show) return null;

        return ReactDom.createPortal(
         <div className={`modal-overlay ${isBlocking ? 'block': ''}`} onClick={isBlocking ? undefined : onClose} >
          <div className={`modal` } onClick={(e) => {e.stopPropagation();}} >
             <div className="content">{children}</div>
             <div className="close-button" onClick={() => setShow(false)}>X</div>
           </div>
         </div>,
         document.body
        )
   

}

export default Modal;