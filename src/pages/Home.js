import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import database from '../firebase';

const Home = () => {

  const [email , setEmail] = useState();

  // Submit Function
  const Submit = () => {
    database.ref("user").set({
      email : email,
    }).catch(alert);
  }

    return (
      <React.Fragment>

    <header>
    <div className="container">

 <div id="branding">
                            
    <h1><span className="highlight">Latin </span> American Coffee</h1>
    
 </div>

         <nav>
        <ul>
            
            <li className="current"><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li><br/>
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


    <section id="showcase">
        <div className="container">
            <h1>Authentic EL Salvador Coffee</h1>
            
        </div>
        

    </section>


    <section className="video">
      <video src="assets/images/CoffeeVideo.mp4" autoplay="" muted="" loop="#"></video>
     
   </section>
<br/>

 <section id="boxes">
  <div className="container">
      <div className="box">
        <img src="assets/images/ElSalvadorCoffee17.png"/>
         

      </div>
      <div className="box">
        
         
         
          <h2><strong>VARIETIES</strong></h2>
          <br/>
          <h4>Bourbon Orange</h4>
          <p>
            This coffee tree has a high-quality 
            </p>
            <p>potential, it’s bourbon-related 
            </p>
            <p>developed in El Salvador. </p>
            <p>This is Traditional America,   </p>
            <p>bourbon-related, a coffee tree </p>
            <p>with a tall stature, great quality</p>
            <p> potential, medium nutrition.</p>
            <br/>

      </div>
      <div className="box">
          
        <img src="assets/images/ElSalvadorCoffee16.png"/>
         

      </div>
  </div>

</section>
<section id="boxes">
  <div className="container">
      <div className="box">
         
        <h4>Red Bourbon</h4>
        <p>
          One of the most important Coffee
          </p>
          <p> Arabica varieties, its excellent </p>
          <p>quality in the cup is given thanks</p>
          <p> to the high altitudes of our farms.
          </p>
          <br/>

          <h4>Pacas</h4>

<p>This coffee is a natural mutation </p>
<p>of Bourbon, it has a dwarf stature,</p>
<p> great quality potential,medium  </p>
<p>nutrition requirement and</p>
<p> an average  ripening of fruit.</p>

<br/>

      </div>
      <div className="box">
          <img src="assets/images/ElSalvadorCoffee6.png"
         />
         <br/>
      
         <h4>Geisha</h4>
         <p>
           This is Ethiopian Landrace tree;  
           </p>
           <p>
            this variety is well-known for
           </p>
           <p>
             its exceptional cup qualityand tolerant 
           </p>
           <p>  to the coffee leaf rust.</p>
           <br/>

      </div>
      <div className="box">
         
        <h4>Pacamara</h4>
        <p>
          The lineage of this coffee  
          </p>
          <p>comes from the cross between,</p>
          <p>Pacas and Magarogype, it was 
          </p>
          <p>developed in El Salvador.</p>
         <br/>

          <h4>SL28</h4>
          <p>
            This is a bourbon-related tree; 
            </p>
           
            <p>it has an exceptional cup 
            </p>
            <p>quality drought tolerant and </p>
            <p>high yield potential. It has a tall   </p>
            <p>stature, low nutrition requirement.</p>

            <br/>
      </div>
  </div>

</section>
<section id="boxes">
  <div className="container">
      <div className="box">
          <img src="assets/images/ElSalvadorCoffee15.png" />
      </div>

      <div className="box">
        <img src="assets/images/ElSalvadorCoffee18.png"/>     
      </div>

      <div className="box">
          <img src="assets/images/ElSalvadorCoffee13.png"/>
      </div>
    
  </div>
  <div className="steam">
    <img src="assets/images/logo12.jfif" alt=""/>
    <img src="assets/images/steam8.png" alt=""/>
    <img src="assets/images/logo12.jfif" alt=""/>
    <img src="assets/images/steam8.png" alt=""/>
    <img src="assets/images/logo12.jfif" alt=""/>
    </div>
    </section>

<br/>

<section id="newsletter">
 
    <div id="error_message"></div>
    <h1>SIGN UP NOW</h1>
    

    <form action="" id="myform" onsubmit="return validate();">
      <input type="email" placeholder="Enter your email" id="email"  value={email}
          onChange={(e) => setEmail(e.target.value)}  />
      <button type="submit"   onClick={Submit}  className="button_1">Subscribe</button>
    </form>
 
</section>


    <section id="FooterPhoto">
        <div className="container">
      
          </div>        
    </section>



    <footer className="footer1">
        
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

export default Home;
