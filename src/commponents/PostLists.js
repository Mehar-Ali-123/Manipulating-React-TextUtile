import React from 'react'
import classes from '../Css/PostLists.module.css'
function PostLists(props) {
    
  return (
    
 <li className={classes.post}>
    <h2 >{props.header}</h2>
    <p> { props.author}</p>
 </li>
 
  )
}

export default PostLists