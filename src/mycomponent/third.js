import React from "react";
function Input1()
{
    return(
        <>
           <h1> your welcome inside : onetick</h1>
        </>
    )
}
function Output1()
{
    return (
        <>
        <h1> this is exit---area</h1>
        </>
    )
}
function Mycon(props)
{
    const isval=props.isval;
    if(isval)
    {
        return <Input1 />
    }
    return <Output1 />

}
export default Mycon;
