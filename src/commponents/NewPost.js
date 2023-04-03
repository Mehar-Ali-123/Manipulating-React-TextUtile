import React from 'react'
import classes from '../Css/NewPost.module.css'
function NewPost(props) {
    // const [inputFeild, setInputFeild] = useState({
    //     name:"",
    //     description:"",
    //     id:""
    // })
// const [inpArr,setInpArr]=useState([])



//     const onChangeInputValueHandler=(e)=>{
        
// setInputFeild({...inputFeild, [e.target.name]:e.target.value,id:Math.random()})
// console.log(inputFeild)
//     }
    
    // let {name,description,id}=inputFeild

    return (
        <div className={classes.container}>
            <form className={classes.formData} onSubmit={props.submitHandel} >
                <p>
                    <label htmlFor="body"><b>Your Name:</b></label> <br />
                    <input type="text" id='body' name='name' value={props.valueofname} onChange={props.onChangeData} />
                </p>
                <p>
                    <label htmlFor="text"><b>Description:</b></label> <br />
                    <textarea type="text"  rows={3} id='text' name='description' value={props.valueoftextarea} onChange={props.onChangeData} />

                </p>
                <button className={classes.button} type="submit" hidden={false}>Add</button>
                <button className={classes.button} type="button" onClick={props.cancelProject} >Cancel</button>
            </form>
        </div>
    )
}

export default NewPost