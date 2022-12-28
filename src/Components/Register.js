import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
    
    const [email,setemail]=useState('')
    const [cpass,setcpass]=useState('')
    const [pass,setpass]=useState('')

    const nav=useNavigate();

// function input(key,val) {
//     return(
//        setname({[key]:val})
//     )
// }

function validate() {
    if (pass !== cpass) {
        alert('check your password')
        nav('/')
    }else if(!email.includes('@')){
        alert('provide valid email')
        nav('/')
    }else{
        nav('/signin')
    }
}

  return (
    <div className='maindiv'>
    <h1>Signup</h1>
    <form>
        <label>Email</label><br/>
        <input type='email' placeholder='email' onChange={(e)=>setemail(e.target.value)} required/><br/>
        <label>Password</label><br/>
        <input type='password' placeholder='password' onChange={(e)=>setpass(e.target.value)} required/><br/>
        <label>conform Password</label><br/>
        <input type='password' placeholder='conform password' onChange={(e)=>setcpass(e.target.value)} required/><br/>
        <button  onClick={()=>validate()}>Submit</button> 
    </form>  
    </div>
  )
}

export default Register