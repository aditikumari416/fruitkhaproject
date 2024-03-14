import React,{useState} from 'react'

function Formm() {
  const [userRegister,setuserRegister] =useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });

  const [record, setRecord]= useState([]);

  const handleInput =(e)=>{
    const name= e.target.name;
    const value =e.target.value;
    console.log(name,value);
    setuserRegister({...userRegister,[name]:value});
  }
  const handleSubmit= (e)=>{
       e.preventDefault();
       const newRecord= {...userRegister, id: new Date().getTime().toString()}
       setRecord([...record,newRecord]);
       console.log(record);
        setuserRegister({username:"",email:"",phone:"",password:""});

  }
  return (
    <>
    <form className='register' onSubmit={handleSubmit}>
    <label>full name</label>   
    <input type='text' name='username'
    id='username'
    value={userRegister.username}
    autoComplete='off'
    onChange={handleInput}  />
    <label>email</label>   
    <input type='text' name='email'
    value={userRegister.email}
    id='email'
    autoComplete='off'
    onChange={handleInput}  />
    <label>phone</label>   
    <input type='number' name='phone'
    value={userRegister.phone}
    id='phone'
    autoComplete='off'
    onChange={handleInput}  />
    <label>password</label>   
    <input type='password' name='password'
    value={userRegister.password}
    id='password'
    autoComplete='off'
    onChange={handleInput}  />
    <button type='submit'>Registration</button>
    </form>
    
    <div className='data'>
      {
        record.map((curElem)=>{
          const { id,username,email,phone,password} =curElem ;
          return(
            <div className='showdata' key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{password}</p>
            </div>
          
           
          )
        })
      }
    </div>
      
    </>
  )
}

export default Formm;