import React from "react";
import {Button, ListGroup, Row, Table} from  'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Employee from "./Employee";


function Home(){
    let history=useNavigate();

    const Edit=(id, Name, age)=>{
        localStorage.setItem('Name',Name)
        localStorage.setItem('age',age) 
        localStorage.setItem('id',id) 
    }
    
    const Delete=(id)=>{
        var i=Employee.map(function(e)
        {
            return e.id;

        }).indexOf(id);
        Employee.splice(i,1);

       history('/');
    }

    return(
        <>
        
        <div style={{margin:"10rem"}}>
            
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                        <th>Id</th>                       
                        <th>Name</th>                  
                        <th>Age</th>
                        <th>Action </th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        Employee && Employee.length>0
                        ?
                        Employee.map((item)=>
                        {
                            return(
                                <tr>
                                    <td>
                                        {
                                            item.id
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.Name
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.age
                                        }
                                    </td>
                                    <td>
                                    <Link to>
                                    <Button onClick={()=>Delete(item.id)}>delet</Button>
                                    </Link>

                                    <Link to={'/Edit'}>
                                    <Button onClick={()=>Edit(item.id,item.Name,item.age)}>Edit</Button>
                                    </Link>

                                    </td>
                                </tr>
                            
                                
                   

                            )
                        }):"no data available"

                    }
                
                </tbody>
            </Table>
            <Link className="d-grid grid-2" to='/create'>            
            <Button size="Lg">create</Button>
            </Link>

        </div>
    </>

    )
}
export default Home;
