import React from 'react'
import classes from '../Css/Modal.module.css'
function EmptyPostMsg(props) {
  return (

    
       <dialog open={props.removeMessage}  className={classes.emptyMsg}>
        <h2>There is no any project , Click on  Add New Project </h2>  
    </dialog>

  )
}

export default EmptyPostMsg