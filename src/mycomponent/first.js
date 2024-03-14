import React,{useState} from "react";
function Myhookfirst()
{
    const name=useState("amar");
    const email=useState("amar@gmail.com")
    const phone=useState("905804545");
    return(
        <>
        <h1> your name :{name}</h1>
        <h1> your email:{email}</h1>
        <h1> your phone:{phone}</h1>
        </>
    )
}
export default Myhookfirst;