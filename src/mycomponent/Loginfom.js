import React, { useState } from 'react'

function Loginfom() {
  const [email,setemail]= useState("");
  const [password,setpassword]= useState("");
  const [allentry,setallentry] =useState([]);
  const submitform = (e)=>{
    e.preventDefault();
    if(email&&password){
      const newentry= { id: new Date().getTime().toString() , email,password};
      setallentry([...allentry,newentry]);
      setemail("");
      setpassword("");
    }else{
      alert("plz fill the form");
    }
   
  }
  return (
    <>
    <form action='' onSubmit={submitform}>
      <div>
      <label>email</label>
    <input type='text' id='email' name='email'
        autoComplete='off'
       value={email}
       onChange={(e)=> setemail(e.target.value)}
    />
      </div>
   
    <div>
    <label>password</label>
    <input type='password' id='pasword' name='password'
    value={password}
    autoComplete='off'
    onChange={(e)=> setpassword(e.target.value)}
    />
    </div>
    
    <button type='submit'>login</button>
    </form>
    <div className='color'>
     {
     allentry.map((curelm)=>{
      //  const {id ,email,password}=curelm;
         return(
           <div className='colors' key={curelm.id}>
            <p>{curelm.email}</p>
            <p>{curelm.password
            }</p>
           </div>
         )
     })
     }

    </div>
   
    
    </>
  )
}

export default Loginfom;