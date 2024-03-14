
// import { useState, useMemo } from "react";
//  import ReactDOM from "react-dom/client";

// import Listitems from "./project2/Listitems";





// import {  BrowserRouter as Router,Route,Routes  } from "react-router-dom";
// import Add from "./project/Add";
// import Edit from "./project/Edit";
// import Home from "./project/Home";
// import Addtable from "./project2/addtable";
// const App = () => {
//   return(
   
//    <> 
//    <Listitems/>
     
//    {/* <Addtable/> 
//      <Router>
//     <Routes>
//        <Route path="/" element={<Home /> }/>
//        <Route path="/create" element={<Add /> }/>
//        <Route path="/edit" element={<Edit /> }/>
//     </Routes>
//    </Router>  */}
   
//    </>
//   )
// };

//   export default App;





// import React from "react";
// import './App.css';
// import Registerpage from "./mycomponent/registerpage";
// // import Loginfom from "./mycomponent/Loginfom.js";


// // import Formm from "./mycomponent/Formm";
// // import Age from "./mycomponent/faurth";
// // import Mybook from "./mycomponent/map";
// // import DataList from "./mycomponent/map2";
// // import Myhookfirst from "./mycomponent/first";
// // import Registration from "./mycomponent/second";
// // import Mycon from "./mycomponent/third";
// function App()
// {
//   return(
//     <>
//     {/* <Loginfom/> */}
//    <Registerpage/>
//     {/* <Formm/> */}
//      {/* <Mybook />
//      <DataList /> */}
//     </>
//   )
// }
// export default App;








import logo from './logo.svg';
import './App.css';
import Navibars from './fruitkha/Navibars';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './fruitkha/Home';
import About from './fruitkha/About';
import Pages from './fruitkha/Pages';
import News from './fruitkha/News';
import Shop from './fruitkha/Shop';
import Contact from './fruitkha/Contact';

function App() {
  return (
   <>
  
   <Router>
    <Routes>
     <Route path="/" element={<Navibars/>} >
     <Route path="/Home" element={<Home/>} />
     <Route path="/About" element={<About/>} />
     <Route path="/pages" element={<Pages/>}/>
     <Route path="/News"  element={<News/>}/>
     <Route path="/Shop"  element={<Shop/>}/>
     <Route path="/Contact" element={<Contact/>}/>

     </Route>

    </Routes>
   </Router>
   </>
  );
}

export default App;
