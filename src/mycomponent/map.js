import React from "react";
function Booklist(props)
{
    return(
        <ul> {props.name}</ul>
    )
}
function Mybook()
{
    const bl=["java","php","node","react","html","css","c++","hibernate","spring","spring boot","angualr","python"];
    return(
        <>
          <ul>
             {bl.map((b)=><Booklist name={b}/>)}
          </ul>
        </>
    )
}export default Mybook;