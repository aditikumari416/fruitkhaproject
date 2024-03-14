import React, { useEffect, useState } from 'react'
import img2 from "../img/download.jpg"
import "./App.css";

// to get the data from ls
const getLocalItem= ()=>{
  let list= localStorage.getItem('lists');
  console.log (list)

  if(list){
    return JSON.parse( localStorage.getItem('lists'));

  }else{
    return [];
  }
}



function Listitems() {
  const [inputitem,setinputitem]= useState("")
  const [listitem, setlistitem] = useState(getLocalItem())
  const [togglesubmit,settogglesubmit]=useState(true);
  const [isedititem,setisedititem]=useState(null)
   const additem= ()=>{

   if(!inputitem){
    alert("plzz fill data");

   }else if(inputitem && !togglesubmit){
    setlistitem(
      listitem.map((elem)=>{
                if(elem.id === isedititem){
                  return{...elem,name:inputitem}
 
                }
                return elem

      })
    )
    settogglesubmit(true)
    setinputitem("")
    setisedititem(null)

   }else{
    const allinputitem= {id: new Date().getTime().toString(),name:inputitem}
       setlistitem([...listitem,allinputitem]);
       setinputitem("")

   }

    
   }
     


   const deleteitem =(index)=>{
         const newitem= listitem.filter((elem)=>{
                return(
                  index!== elem.id
                ) })
                setlistitem(newitem);

   }
   const clearall=()=>{
       setlistitem([])
   }
  //  add data local storage
  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(listitem))
  },[listitem]);

  // add editiutem
  const edititem=(id)=>{
    let newedititem = listitem.find((elem)=>{
      return elem.id === id
    })
    console.log(newedititem)
    settogglesubmit(false)
    setinputitem(newedititem.name)
    setisedititem(id)
          
  }
  return (
   <>
   <div className='list-container'>
      <div className='list-img'>
        <img src={img2} alt='img'/>
        <p>Add your list Here ✌ </p>
      </div>
      <div className='additem'>
        <input type='text' 
        placeholder='✍ Add item'
        value={inputitem}
        onChange={(e)=> setinputitem(e.target.value)}
        />
        {
          togglesubmit ?  <i className="fa-solid fa-plus" onClick={additem}></i>:
          <i className="fa-solid fa-edit" onClick={additem}></i>
        }
       

        
      </div>
      <div className='showitem'>
       
        {
          listitem.map((celem)=>{
                  return(
                    <>
                    <div className='eachitem' key={celem.id}>
                    <h5>{celem.name}</h5>
    
       <h5> <i className="fa-solid fa-edit" onClick={()=>edititem(celem.id)}></i>
        <i className="fa-solid fa-trash" onClick={()=>deleteitem(celem.id)}></i>
        
       </h5>
       </div>
       </>

                  )
          })
        }
        <button onClick={clearall}>clear all</button>
      </div>
   </div>
   
   </>
  )
}

export default Listitems;