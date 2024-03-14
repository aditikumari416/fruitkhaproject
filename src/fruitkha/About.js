import React from 'react'
import img2 from "../img/strawbery.jpg";
import img3 from "../img/graps.jpg";
import img4 from "../img/lemon.jpg";

function About() {
  return (
    <>
     <div className="container-fruit-card">
          <div className="row-fruit-card">
            <div className="col-fruit-card" style={{width: 540}}>
              <h1><span>our</span>
                <spna>Products</spna>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
            </div>
          </div>
         </div>
         <div className="card-group">
          <div className="card">
            <img src={img2} className="card-img-top img-fluid" alt="img"/>
            <div className="card-body">
              <h5 className="card-title">Strawberry</h5>
              <p className="card-text">per kg</p>
              <h1 className="card-title">85$</h1>
              <p><button><i className="fa-solid fa-cart-shopping"></i>  add to cart</button></p>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="card-img-top img=fluid" alt="img"/>
            <div className="card-body">
              <h5 className="card-title">Berry</h5>
              <p className="card-text">per kg</p>
              <h1 className="card-title">70$</h1>
              <p><button><i className="fa-solid fa-cart-shopping"></i>  add to cart</button></p>
            </div>
          </div>
          <div className="card text-align-center">
            <img src={img4} className="card-img-top img=fluid" alt="img"/>
            <div className="card-body">
              <h5 className="card-title">lemon</h5>
              <p className="card-text">per kg</p>
              <h1 className="card-title">85$</h1>
              <p><button><i className="fa-solid fa-cart-shopping"></i>  add to cart</button></p>
            </div>
          </div>
        </div>
    
    
    </>
  )
}

export default About;