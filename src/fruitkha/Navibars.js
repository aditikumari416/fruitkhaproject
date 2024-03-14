
import React from 'react'
import img1 from '../img/fruit.png';
import { Link,Outlet } from 'react-router-dom';

import About from './About';
import Pages from './Pages';
import Shop from './Shop';
import News from './News';

  
import logo1 from "../img/1logo.png";
import logo2 from "../img/lucky.png";
import logo3 from "../img/blul.png";
import logo4 from "../img/hotfal.png";
import logo5 from "../img/yourlogo.png";
 

function Navibars() {
  return (
    <>
     <div className="container-fluid justify-content-center" >
         <div className="row align-items-center">
            <div className=" img col-2">
              <img src={img1} alt="img" width="180px" className="img=fluid"/>
              
            </div>
            <div className="col-5 ">
    
            <ul className="navbar ">
                <li><Link to ="/home" className="active">home</Link>
                <ul className="dropdown-home">
                    <li><Link to="/">static home</Link></li>
                    <li><Link TO="/">slider home</Link></li>
                </ul>
                </li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/pages">pages</Link>
                    <ul className="dropdown-pages">
                        <li><Link to="/">404 page</Link></li>
                        <li><Link to="/">about</Link></li>
                        <li><Link to="/">Check Out</Link></li>
                        <li><Link to="/"> Cart</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">News</Link></li>
                        <li><Link to="/">shop</Link></li>
                        
                    </ul>
                </li>
                <li><Link to="/news">news</Link>
                <ul className="dropdown-news">
                    <li><Link to="/">news</Link></li>
                    <li><Link to="/">single news</Link></li>
                    
                </ul>
                </li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/shop">shop</Link></li>
                
                
            </ul>
            </div>
            <div className="col-1 offset-1">
                <Link to="/" className="offset-3"><i className="fa-solid fa-cart-shopping"></i></Link>
                    
                 <Link to="/" className="offset-3"><i className="fa-solid fa-magnifying-glass-minus"></i></Link>
           
            </div>
         </div>
      </div>
      
      <Outlet/>
       <About/>
      <Pages/>
      <News/>
      <Shop/> 
      



     {/* start logos */}
      <div className="container-logo">
        <div className="row-logo">
          <div className="col-logo">
            <img src={logo1} alt="img"/>
            <img src={logo2} alt="img"/>
            <img src={logo3} alt="img"/>
            <img src={logo4} alt="img"/>
            <img src={logo5} alt="img"/>
          </div>
        </div>
      </div>

      {/* start footer */}
      <div className="container-footer">
        <div className="row-footer">
          <div className="col-footer">
            <h3>About us</h3>
            
            <h6><p>Ut enim ad minim veniam perspiciatis under omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p></h6>
          </div>
          <div className="col-footer">
            <h3>Get in Touch</h3>

            <h6><p>34/8, East Hukupara, Gifirtok, Sadan.
              support@fruitkha.com
              +00 111 222 3333</p></h6>
          </div>
          <div className="col-footer">
            <h3>Pages</h3>

            <h6><p>
              <ul>
                <li><span><i className="fa-solid fa-angle-right"></i></span>    Home</li>
                <li><span><i className="fa-solid fa-angle-right"></i></span>    About</li>
                <li><span><i className="fa-solid fa-angle-right"></i></span>    Shop</li>
                <li><span><i className="fa-solid fa-angle-right"></i></span>    news</li>
                <li><span><i className="fa-solid fa-angle-right"></i></span>    contact</li>
              </ul>
            </p></h6>
          </div>
          <div className="col-footer">
            <h3>Subscribe</h3>

            <h6><p>Subscribe to our mailing list to get the latest updates.</p></h6>
          </div>
        </div>
      </div>
    

    
    
    </>
  )
}

export default Navibars;