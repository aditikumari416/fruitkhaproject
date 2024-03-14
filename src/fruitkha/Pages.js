import React from 'react'

function Pages() {
  return (
   <>
    <div className="container-month">
          <div className="row-month">
            <div className="col-month" id="background">
              <div className="offer">
                <div className="off">
                  <h1>30%</h1>
                  <p>off per kg</p>
                </div>
              </div>
  
            </div>
            <div className="col-month">
            <div className="text-month">
              <h1><span>Deal </span><span>of the month</span> </h1>
              <h5>HIKAN STRWABERRY</h5>
              <p>Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere 
                ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</p>

               <div className="date-container">
                <div className="date">
                
                  <h1>00</h1>
                  <p>Days</p>
               
              </div>
              <div className="date">
              
                  <h1>00</h1>
                  <p>Hours</p>
               
              </div>
              <div className="date">
              
                  <h1>00</h1>
                  <p>Min</p>
               
              </div>
              <div className="date">
              
                  <h1>00</h1>
                  <p>Sec</p>
               
              </div>
               </div>
               <div className="btn">
                <p><button><i className="fa-solid fa-cart-shopping"></i>  add to cart</button></p>
               </div>
            </div>
            </div>
          </div>
        </div>
   
   
   </>
  )
}

export default Pages;