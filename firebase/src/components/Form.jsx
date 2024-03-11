import React from 'react'
import "./Form.css"
import { useState } from 'react';

const Form = () => {
   const [userData , setUserData] = useState({
    firstName : "",
    secondName : "",
    phone : "",
    emailId : "",
    AddAddress : "",
    message : ""
   });

   const postUserData = (event) =>{
    const {name , value} = event.target;
    setUserData({...userData, [name] : value});
   };

   const submitData =async (event)=>{
        event.preventDefault();
        const {firstName , secondName , phone , emailId , AddAddress , message} = userData;
        const res = fetch(
            "https://react-firebase-f712b-default-rtdb.firebaseio.com/userDataRecord.json",{
             method : "POST",
             headers :{
                "Content-Type" :"application/json",
             },
             body : JSON.stringify ({
                firstName ,
                secondName ,
                phone ,
                emailId ,
                AddAddress ,
                message ,
             }),
          }
        );
        if(res){
            setUserData({
                firstName : "",
                secondName : "",
                phone : "",
                emailId : "",
                AddAddress : "",
                message : ""
            })
            alert("Data Stored");
        }else{
            alert("Please Enter Data");
        }
   }

  return (
     <>
        <div className='form-container'>
             <div className='image-container'>
                <img src="src\components\SideImage.jpg" alt="img Not Found"></img>
             </div>

           <form className='form-main'>
             <h1>Registration Form</h1>
           <div className='form-flex-1'>
                    <input type='text' 
                    name='firstName' 
                    placeholder='First Name'
                    id="css" 
                    autoComplete='none'
                    autoSave='none'
                    value={userData.firstName}
                    onChange={postUserData}
                     ></input>
                    <input type='text' 
                    name='secondName' 
                    placeholder='Second Name' 
                    autoComplete='none'
                    value={userData.secondName}
                    onChange={postUserData}
                    ></input>
            </div>

            <div className='form-flex-2'>
                    <input type='text' 
                    name='phone' 
                    placeholder='Phone Number'  
                    id="css" 
                    autoComplete='none'
                    value={userData.phone}
                    onChange={postUserData}
                    ></input>
                    <input type='emil' 
                    name='emailId' 
                    placeholder='Email Id' 
                    autoComplete='none'
                    value={userData.emailId}
                    onChange={postUserData}
                    ></input>
            </div>
            
                 
                    <input type='text' 
                    name='AddAddress' 
                    placeholder='Add Address' 
                    autoComplete='none'
                    value={userData.AddAddress}
                    onChange={postUserData}
                    ></input><br></br>
                    <input type='text' 
                    name='message' 
                    placeholder='Enter Your Message' 
                    autoComplete='none'
                    value={userData.message}
                    onChange={postUserData}
                    ></input>
                    <input type='submit' 
                    name = "submit" 
                    value="Submit" 
                    id="btn"
                    onClick={submitData}
                    ></input>
        
           </form>
        </div>
     </>
  )
}

export default Form