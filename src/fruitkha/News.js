import React from 'react'
import img5 from "../img/news-bg-1.jpg";
import img6 from "../img/news-bg-2.jpg";
import img7 from "../img/news-bg-3.jpg";
import { Link } from 'react-router-dom';

function News() {
  return (
   <>
    <div className="container-ournews">
          <div className="row-ournews">
              <div className="col-ournews">
                  <h1><span>our</span> <span>news</span></h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
              </div>
          </div>
          <div className="row-ournews">
              <div className=" card-row-ournews" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
                <div className="card-ournews">
                  <div className="img-ournews">
                      <img src={img5} alt="img"/>
                  </div>
                  <div className="text-ournews">
                     <h3> <Link to="/">You will vainly look for fruit on it in autumn.</Link></h3>
                     <div className="comment">
                     <p> <span><i className="fa-solid fa-user fa-bounce"></i>  admin</span>
                      <span><i className="fa-solid fa-calendar-check fa-bounce"></i>  27 dec,2019</span></p>
                    </div>
                      <p>Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                      <h3> <Link to="/">read more <i className="fa-solid fa-angle-right"></i></Link></h3>
                  </div>
                </div>
              </div>
              <div className=" card-row-ournews" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
                <div className="card-ournews">
                  <div className="img-ournews">
                      <img src={img6} alt="img"/>
                  </div>
                  <div className="text-ournews">
                     <h3> <Link to="/">A man's worth has its season, like tomato.</Link></h3>
                     <div className="comment">
                     <p> <span><i className="fa-solid fa-user fa-bounce"></i>  admin</span>
                      <span><i className="fa-solid fa-calendar-check fa-bounce"></i>  27 dec,2019</span></p>
                      
                    </div>
                      <p>Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros. </p>
                              <h3> <Link to="/">read more <i className="fa-solid fa-angle-right"></i></Link></h3>
                           
                  </div>
                </div>
              </div>
              <div className=" card-row-ournews" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
                <div className="card-ournews">
                  <div className="img-ournews">
                      <img src={img7} alt="img"/>
                  </div>
                  <div className="text-ournews">
                      <h3> <Link to="/">Good thoughts bear good fresh juicy fruit.</Link></h3>
                      <div className="comment">
                     <p>   <span><i className="fa-solid fa-user fa-bounce"></i>  admin</span>
                      <span><i className="fa-solid fa-calendar-check fa-bounce"></i> 27 dec,2019</span></p>
                          
                      </div>
                       <p>Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                       <h3> <Link to="/">read more <i className="fa-solid fa-angle-right"></i></Link></h3>
                      
                   </div>
                </div>
              </div>
          </div>
          <div className="ournews-button">
              <Link to="/">more news</Link>
          </div>
      </div>
   
   </>
  )
}

export default News;