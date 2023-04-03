import React, { useState }  from 'react'
import classes from '../Css/Product.module.css'
import NewPost from './NewPost'
import PostLists from './PostLists'
import Modal from './Modal'
import NavBar from './NavBar'
import EmptyPostMsg from './EmptyPostMsg'
function ProductPage() {
    const [inputFeild, setInputFeild] = useState({
        name:"",
        description:"",
        id:""
    })
    const [inpArrData,setInpArrData]=useState([])
    const [showpopUp,setShowPopUp]=useState(false)
const [emptyMessage,setEmptyMessage]=useState(true)

    const onChangeInputValueHandler=(e)=>{
        console.log(inputFeild)
        setInputFeild({...inputFeild, [e.target.name]:e.target.value,id:Math.random()})   
            }
            
            const handlePopUp=(e)=>{
               e.preventDefault()
                setShowPopUp(true)
            }

                let {name,description,id}=inputFeild

                const submitHandlerEvent=(e)=>{
                    if (!name || !description){
                        e.preventDefault()
                        alert("Please Fill All The Feilds")
                       }
                       else{
                        e.preventDefault()
                        // fetch('',{
                        //     method:'POST',
                        //     body:JSON.stringify(e),
                        //     headers:{
                        //         'Content-Type':'apllication/json'
                        //     },
                        // });
                        // setInpArrData((existingPosts)=>[e,...existingPosts]);

                        setInpArrData([...inpArrData,{name,description,id}])
                        console.log(inpArrData)
                        setInputFeild({name:"",description:"",id:""})
                        setEmptyMessage(false)
                        setShowPopUp(false)
                       }
                }

                const closePopUPHandler=()=>{
                  
                    setShowPopUp(false)
                    setInputFeild({name:"",description:"",id:""})
                }
                
              
  return (
    <>
    <NavBar onClick={handlePopUp}/>
 
  <EmptyPostMsg  removeMessage={emptyMessage && !showpopUp}/>
  
  
    <Modal popUp={showpopUp}>
   
   <NewPost   onChangeData={onChangeInputValueHandler} valueofname={inputFeild.name} valueoftextarea={inputFeild.description} cancelProject={closePopUPHandler}   submitHandel={submitHandlerEvent}/>
   </Modal>

       <div className={classes.post} >
        {inpArrData.map((items)=>{
            return(
<PostLists header={items.name}  author={items.description} key={items.id}/>
            )
        })}
        
       
       </div>
       </>
  )
}

export default ProductPage