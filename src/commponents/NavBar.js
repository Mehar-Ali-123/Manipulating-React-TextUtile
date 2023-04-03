import React from 'react'
import Spline from '@splinetool/react-spline'
import classes from '../Css/NavBar.module.css'
function NavBar(props) {
  return (
   <>
   <div>
<div className={classes.container} >
    <h2>React Projects</h2>
    <button className={classes.button} onClick={props.onClick}>Add New Project</button>
</div>
    <div className={classes.border}></div>
    {/* <Spline className={classes.spline} scene="https://prod.spline.design/viSgcelpJiGcZ7sN/scene.splinecode" ></Spline> */}
  
   </div>
   </>
  )
}

export default NavBar