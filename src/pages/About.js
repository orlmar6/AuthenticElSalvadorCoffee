import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {
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
            <li className="current"><Link to="/about">About</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
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

    <section id="aboutphoto">
        <div className="container">
            <h1>ABOUT US</h1>
            <p> We cultivate the most highly-recognized varieties of coffee arabica, <br/>
                in terms of quality and flavor. Our varieties are carefully processed and <br/>
                all are cultivated in the mountain range, which is known for its volcanic origin<br/>
                and ideal soil for coffee cultivation.<br/>
                <br/>
                All our efforts are geared towards the well<br/> being of our plants 
                and their environment,with a yearly cycle of cleaning,<br/> maintenance, 
                fertilization and certification
                in all our plantations.</p>
        </div>
    </section>



    <section className="Ginfo">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="text-left">OUR COFFEE</h2>
              <p>
             We specialize in preparing fine coffees for export and our coffee is cultivated 
             under the shadow of native trees that we have maintained for years. 
             We also use the shade of a variety of Inga type plants that also serve
            a nitrogen fixators to enrich the soil. 
            <br/>
            <br/>
            We maintain a soil-plant ratio that generates a proper environment for
            conservation of local fauna. This also makes our estates an important source 
            of oxygen and water production as well as a safe habitat for local biodiversity.
             <br/>
            <br/>
            All our coffee plantations receive adequate care against plagues and diseases
            through eco-friendly products, especially through biological and cultural systems
            that avoid degrading the environment. We have maintained a reliable realtionship
            of the highest degree with coffee exporters.
             </p>
            </div>
            <div>
                <h2 className="text-right">OUR QUALITY</h2>
                <p>
                 Our coffee farms produce and grow high-quality coffee, predominantly Borbón but also
                  varieties that we have spent years to develop.These are cultivated 
                  in the Apaneca – Lamatepec mountain range, in Ahuachapán, 
                  in an biodiversity-friendly environment.
                  <br/>
                  <br/>
                Coffee beans are processed immediately after it is picked in our mill. 
                Here we take care to maintain the quality that is established in our fields
                 by being especially careful during pulping, fermenting, and washing with clear
                water from natural springs in the area to the optimal state
                before sun or machine-drying. 
                <br/>
                <br/>
                Every batch is sampled to verify its quality. Coffee is then stored between
                11.5% and 12% humidity for aging before it is finally prepared for export.
                  </p>

              
          </div>
        </div>
</div>
      </section>



    <section className="video">
      <video src="assets/images/Coffee-Sac.mp4" autoplay="" muted="" loop="#"></video>
      <h4>El Salvador Coffee Beans</h4>
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
