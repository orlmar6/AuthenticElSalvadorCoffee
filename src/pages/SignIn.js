import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
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
      <li><Link to="/Gallery">Gallery</Link></li>
      <li><Link to="/ContactUs">Contact Us</Link></li>
      <br/>
      <br/>
      <br/>
      <li><Link to="/CoffeeProcess">Coffee Process</Link></li>
      <li><Link to="/Products">Shop</Link></li>
      <li className="current"><Link to="/SignIn">Sign In</Link></li>
      <i className="material-icons">&#xe7fd;</i>
    </ul>
   </nav>
   </div>
</header>

<section className="section1">
    <div className="container">
        <div className="user signinBx">
            <div className="imgBx"><img src="assets/images/Coffee32.jpg" alt=""/></div>
             <div className="formBx">
              
              <form  action="" id="myform" onsubmit="return checkforblank ()">
                <div id="errormessage"></div>
                
                 <h2> Sign In</h2>
                 
    
                 <input type="text" id="fname" name="fname" placeholder="Username" />
                 <input type="password" id="pass" name="pass" placeholder="Password"/>
                 
                 <button type="submit" className="button-2">Login</button>
              
                 <p className="signup">Don't have an account? <a href="#" onclick="toggleForm();">Sign up</a></p>
    
              </form>
              
             </div>
        </div>
          
        <div className="user signupBx">
           <div className="formBx">
           <form action="" id="myform" onsubmit="return validate();">
    
               <div id="error_message"></div>
    
               <h2>Create an account</h2>
              
              
               <input type="username" placeholder="Username" id="username" />
               <input type="email" placeholder="Enter your email" id="email" />
               <input type="password" placeholder="Create Password" id="password" />
               <input type="password" placeholder="Confirm Password" id="confirm" />
    
            
               <button type="submit" className="button_2">Sign Up</button>
    
               <p className="signup">Already have an account? <a href="#" onclick="toggleForm();">Sign in</a></p>
           </form>

           </div>
                  <div className="imgBx"><img src="assets/images/Coffee44.jpg" alt=""/></div>
        </div>
    </div>
   
</section>


<br/>
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
