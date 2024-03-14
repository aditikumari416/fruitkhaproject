import React,{useState} from "react";
function Registration()
{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [city,setCity]=useState('')
      
    const submit_data=(event)=>
    {
      event.preventDefault();
      
      console.log({name,email,phone,city});

    }
   
   

    return(
        <>
        
        <form onSubmit={submit_data}>
             <input
             type="text"
             name="t1"
             value={name}
             placeholder="enter the name"
             onChange={(e)=>setName(e.target.value)}
             />
               <input
             type="text"
             name="t2"
             value={email}
             placeholder="enter the email"
             onChange={(e)=>setEmail(e.target.value)}
             />
               <input
             type="text"
             name="t3"
             value={city}
             placeholder="enter the city"
             onChange={(e)=>setCity(e.target.value)}
             />
               <input
             type="text"
             name="t4"
             value={phone}
             placeholder="enter the phone"
             onChange={(e)=>setPhone(e.target.value)}
             />
             <input type="submit" value="save" />
        </form>
        
        
        
        
        
        
        </>
    )
}
export default Registration;