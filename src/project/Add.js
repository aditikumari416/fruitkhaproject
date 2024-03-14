import { useState } from "react";
import React from "react";
import { Button, Form } from "react-bootstrap";

import {v4 as uuid}from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Employee from "./Employee";

function Add() {
    const[Name,setName]=useState('');
    const[age,setAge]=useState('');
    let history=useNavigate();


    const handleSubmit=(e)=>{
        e.preventDefault('');
        const ids=uuid();
        let uqid=ids.slice(0,8);
        let a=Name, b=age;
        Employee.push({id:uqid, Name:a, age:b});
        history("/");
    }

    return(
        <div>
            
            <Form className="d-grid gap-2" style={{margin:"15rem"}} >
                <Form.Group className="mb-3" controlId="formName"> 
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}>       
                </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge"> 
                <Form.Control type="text" placeholder="Enter Age" required onChange={(e)=>setAge(e.target.value)}>
                </Form.Control>
                </Form.Group>
                <Button type="submit" onClick={(e)=>handleSubmit(e)}>submit</Button>
            </Form>
        </div>
    )
}
export default Add;
