import React, { useState } from 'react'

function Registerpage() {
    const [username,setusername]=useState("");
    const [age,setage]=useState("");
    const [phone,setphone]=useState("");
    const [address,setaddress]=useState("");
    const [password,setpassword]=useState("");

    const [record,setRecord] =useState([]);
    const submitregist =(e)=>{
        e.preventDefault();
        const  newentry = { id: new Date().getTime().toString(),username,age,phone,address,password};
        setRecord([...record,newentry]);
        // console.log(record);
        setusername("")
        setage("")
        setaddress("")
        setphone("")
       setpassword("")
    }
  return (
   <>
   <div className='register' onSubmit={submitregist}>
   <form action='' >
   <label>name</label>
   <input type='text' id='name' name='username' 
   autoComplete='off'
   value={username}

   onChange={(e)=> setusername(e.target.value) }
   />
   <label>age</label>
   <input type='number' id='age' name='age' 
   autoComplete='off'
   value={age}
   onChange={(e)=> setage(e.target.value) }
   />
   <label>phone</label>
   <input type='text' id='phone' name='phone' 
   autoComplete='off'
   value={phone}
   onChange={(e)=> setphone(e.target.value) }
   />
   <label>address</label>
   <input type='text' id='address' name='address' 
   autoComplete='off'
   value={address}
   onChange={(e)=> setaddress(e.target.value) }
   />
   <label>password</label>
   <input type='text' id='password' name='passord'
   autoComplete='off' 
   value={password}
   onChange={(e)=> setpassword(e.target.value) }
   />
   <button type='submit'>register</button>

   </form>
   </div>
   <div>
        
    {
        record.map((celem) => {
            return(
                <div className='colors' key={celem.id}>
                    <p>{celem.username}</p>
                    <p>{celem.age}</p>
                    <p>{celem.phone}</p>
                    <p>{celem.address}</p>
                    <p>{celem.password}</p>
                </div>
            )
        })
    }


   </div>
  
   
  
   </>
  )
}

export default Registerpage;