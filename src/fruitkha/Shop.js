import React from 'react'
import { Link } from 'react-router-dom'

function Shop() {
  return (
   <>
   <div className="container-fruitkha">
          <div className="row-fruitkha">
            <div className="col-fruitkha">
             <div className="youtube">
              <div className="video">
                <div className="video1">
                 <Link to="/"><i className="fa-solid fa-circle-pause"></i> </Link>
                </div>
              </div>
             </div>
            </div>
            <div className="col-fruitkha">
            <div className="col-text">
              <div className="text-fruitkha">
                <p>Since Year 1999</p>
                <h1><span>We are </span><span>Fruitkha </span> </h1>
                <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
  
                 <div className="btn">
                  <p><button>  know more</button></p>
                 </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* start december sale */}

<div className="container-discount">
  <div className="row-discount">
    <div className="col-discount">
      <div className="text-discount">
        <h1><span>December sale is on!
          with big </span><span> Discount... </span> </h1>
          <p><span>sale upto!</span>
          <span>50%</span>
        <span>off</span></p>

         <div className="btn">
          <p><button>  know more</button></p>
         </div>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default Shop;