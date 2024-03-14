import { useEffect, useState } from "react";
import React from "react";
import { Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Employee from "./Employee";

function Edit() {
    const[Name,setName]=useState('');
    const[age,setAge]=useState('');
    const[id,setId]=useState('');

    let history=useNavigate();

    var i=Employee.map(function(e){
        return e.id;
        }).indexOf(id);

        const handleSubmit=(e)=>{
            e.preventDefault('');
            let a=Employee[i];
            a.Name=Name;
            a.age=age; 
            history("/");
        }

        useEffect(()=>{
            setName(localStorage.getItem('Name'))
            setAge(localStorage.getItem('age'))
            setId(localStorage.getItem('id'))
        },[])

        return(
            <div>
                
                <Form className="d-grid gap-2" style={{margin:"15rem"}} >
                    <Form.Group className="mb-3" controlId="formName"> 
                    <Form.Control type="text"  value={Name} required onChange={(e)=>setName(e.target.value)}>               
                    </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAge"> 
                    <Form.Control type="text"  value={age} required onChange={(e)=>setAge(e.target.value)}>        
                    </Form.Control>
                   </Form.Group>
                    <Button type="submit" onClick={(e)=>handleSubmit(e)}>submit</Button>
                </Form>
            </div>   
        )
}
export default Edit;

