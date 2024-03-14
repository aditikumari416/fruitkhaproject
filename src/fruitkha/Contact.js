import React from 'react'


function Contact() {
  return (
    <>
   <div className='contact'>
    <div className='contact-head'>
    <p>GET 24/7 SUPPORT</p>
    <h1>contact us</h1>
    </div>
   </div>
   <div className='contact-detail'>
   <div className='query-contact'>
     <h2>Have you any question?</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>

     <input type='text'placeholder='name'/>
     <input type='text'placeholder='email'/>
     <input type='number'placeholder='phone'/>
     <input type='text'placeholder='subject'/>
     <input type='address'placeholder='address'/>
   </div>
   <div className='contact-info'>

   <div className='address'>
    <h4> <i class="fa-solid fa-map fa-bounce"></i>  shop address</h4>
    <p>34/8, East Hukupara<br/>
         Gifirtok, Sadan.<br/>
           Country Name </p>
   </div>
   <div className='address'>
    <h4><i class="fa-solid fa-clock fa-bounce"></i>  shop hours</h4>
    <p>MON - FRIDAY: 8 to 9 PM<br/>
        
             SAT - SUN: 10 to 8 PM<br/>
          </p>
   </div>
   <div className='address'>
    <h4><i class="fa-solid fa-address-book fa-bounce"></i>  contact</h4>
    <p>Phone: +00 111 222 3333<br/>
          Email: support@fruitkha.com</p>
   </div>

   </div>
   </div>
    </>
  )
}

export default Contact;