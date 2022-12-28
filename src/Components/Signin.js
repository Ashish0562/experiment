import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Signin() {

    const nav=useNavigate();

    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')

    function validate() {
        if (email==="" || pass==="") {
            alert('provide valid email/password')
            nav('/signin')
        }else{
            nav('/home')
        }
    }


  return (

    <div className='seconddiv'>
    <h1>SignIn</h1>
    <form>
        <label>Email</label><br/>
        <input type='email' placeholder='email' onChange={(e)=>setemail(e.target.value)} required/><br/>
        <label>Password</label><br/>
        <input type='password' placeholder='password' onChange={(e)=>setpass(e.target.value)} required/><br/>
        <button  onClick={()=>validate()} type='submit'>Signin</button>
    </form>  
    </div>
  )
}

export default Signin