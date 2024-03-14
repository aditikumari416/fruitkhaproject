import React from 'react'


function Home() {
  return (
    <>
     <div className="container-fluid-2">
          <div className="row-fluid-2">
            <div className="col-fluid-2">
                <h3 className="">FRESH & ORGANIC</h3>
                <h1 className="text-white">Delicious Seasonal Fruits</h1>
                <span>
                  <button>fruit collection</button>
                  <button className="btn">contact us</button>
                </span>
            </div>
        </div>
      </div>
       {/* start icon */}
       <div className="container-icon">
        <div className="card mb-3 " style={{width:400}}>
          <div className="row g-0 " >
            <div className="col-md-4">
            
              <i className="fa-solid fa-truck-fast"> </i> 
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-black">free shipping</h5>
                <p className="card-text">When order over $75</p>
              </div>
            </div>
          </div>
          </div>
          <div className="card mb-3 " style={{width:540}}>
          <div className="row g-0">
            <div className="col-md-4">
            
              <i className="fa-solid fa-phone-volume"></i> 
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-black">24/7 Support</h5>
                <p className="card-text">Get support all day</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 " style={{width:540}}>
          <div className="row g-0">
            <div className="col-md-4">
            
              <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-black">Refund </h5>
                <p className="card-text">When order over $75</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;