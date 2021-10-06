import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
    return (
      <React.Fragment>

<header>
<div className="container">

     <div id="branding">
         
     <h1><span className="highlight">Authentic</span> El Salvador Coffee</h1>  
            
     </div>
 
 <nav>
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li className="current"><Link to="/Gallery">GALLERY</Link></li>
    <li><Link to="/ContactUs">Contact Us</Link></li>
    <br/>
    <br/>
    <br/>
    <li><Link to="/CoffeeProcess">Coffee Process</Link></li>
    <li><Link to="/Products">Shop</Link></li>
    <li><Link to="/SignIn">Sign In</Link></li>
    <i className="material-icons">&#xe7fd;</i>
  </ul>
 </nav>
</div>
</header>



<section id="Galleryphoto">
<div className="container">
    <h1>GALLERY</h1>
   
</div>
</section>
<section>

<div className="container2">
<div className="heading">
<h3>Photo <span>Gallery</span></h3>
</div>


<div className="Case">
<div className="Dream">
<img src="assets/images/EScoffee.jpg"/>
<img src="assets/images/coffee6.jfif"/>
<img src="assets/images/coffee7.jfif"/>
<img src="assets/images/coffee13.jfif"/>
<img src="assets/images/Coffee14.jfif"/>
<img src="assets/images/coffee17.jfif"/>
</div>

<div className="Dream">
<img src="assets/images/Coffee42.jpeg"/>
<img src="assets/images/coffee19.jfif"/>
<img src="assets/images/coffee20.jfif"/>
<img src="assets/images/coffee21.jpg"/>
<img src="assets/images/coffee25.jpg"/>
<img src="assets/images/coffee29.jfif"/>
</div>

<div className="Dream">
<img src="assets/images/Coffee3.jpg"/>
<img src="assets/images/coffee39.jfif"/>
<img src="assets/images/Coffee32.jpg"/>
<img src="assets/images/coffee18.jfif"/>
<img src="assets/images/coffee38.jfif"/>
<img src="assets/images/coffee35.jfif"/>
</div>

</div>
</div>
<br/>

</section>

<section id="newsletter">

<div id="error_message"></div>
<h1>SIGN UP NOW</h1>
<form action="" id="myform" onsubmit="return validate();">
<input type="email" placeholder="Enter your email" id="email" />
<button type="submit" className="button_1">Subscribe</button>
</form>

</section>

<footer className="footer">

<div className="container grid">
   
    <div>
       
        <h1>AuthenticElSalvadorCoffee</h1>
        <p> Copyright &copy; 2021</p>
        
    </div>
    <div className="social">
        <a href="#"><i className="fab fa-twitter fa-x"></i></a>
        <a href="#"><i className="fab fa-facebook fa-x"></i></a>
        <a href="#"><i className="fab fa-instagram fa-x"></i></a>
        <a href="#"><i className="fab fa-github fa-x"></i></a>
        <a href="#"><i className="fab fa-linkedin fa-x"></i></a>
    </div>

</div>
</footer>
    
      </React.Fragment>
    )
}
