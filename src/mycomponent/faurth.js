import React,{useState} from "react";
function Adult()
{
    return (
        <>
        <h1>  i'am adult person ------------</h1>
        </>
    )
}
function NonAdult()
{
    return(
        <>
        <h1> you are not adult person so you can't vote</h1>
        </>
    )
}
function Age()
{
    const [ag,setAg]=useState();
  
   const submit_data =(event)=>{
      if(ag>=18)
      {

         return <Adult />
      }
    }
   
   

    return(
        <>
        <form onSubmit={submit_data}>
            <input
            type="text"
            value={ag}
            placeholder="enter the age:"
            onChange={(e)=>setAg(e.target.value)}
            />
            <button type="submit">save </button>

        </form>

        </>
    )
}
export default Age;