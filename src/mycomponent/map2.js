import React from "react";
function Data(props)
{
    return(
        <>
        <li>id:{props.key} your values: {props.name}</li>
        </>
    )
}
function DataList()
{
   const data=[
    {id:101,name:"sachin"},
    {id:102,name:"tehandar"},
    {id:103,name:"rajkumar"},
    {id:104,name:"mukesh"}
   ]
  return(
    <>
    {data.map((p)=><Data key={p.id} name={p.name}/>)}
    </>
  )
}
export default DataList;