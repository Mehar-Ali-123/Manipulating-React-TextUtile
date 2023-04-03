import React from 'react'
import classes from '../Css/Modal.module.css'
function Modal(props) {
    
  return (
    
   <div>
<dialog  open={props.popUp} className={classes.modal}>
{props.children}
</dialog>
</div>
    
  )
}

export default Modal