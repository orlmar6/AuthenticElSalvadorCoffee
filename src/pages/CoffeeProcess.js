import React from 'react'
import { Link } from 'react-router-dom'

export default function CoffeeProcess() {
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
            <li className="current"><Link to="/CoffeeProcess">Coffee Process</Link></li>
            <li><Link to="/Products">Shop</Link></li>
            <li><Link to="/SignIn">Sign In</Link></li>
            <i className="material-icons">&#xe7fd;</i>
          </ul>
         </nav>
     </div>
    </header>


  <section className="video">
    <video src="assets/images/CoffeeProcessing.mp4" autoplay="" muted="" loop="#"></video>
    <h4>Coffee Processing</h4>
 </section>


    <section className="Ginfo1">
        <div className="container">
          <div className="split1">
            <div>
              <h2 className="text-left">GENERAL PROCESSING </h2>
              <p>
                After an appropriate picking and selection of the coffee bean, it is 
                transferred to the coffee processing plant for its respective pulping, 
                removal of the mucilage, drying, and threshing. We adapt to the requirements 
                of preparation of international markets such as Specialty grade, American
                and European preparation. Our warehouses are conditioned to maintain the
                highest quality standards where humidity is maintained between 10.5% to 11.5%.
                The processing methods that we currently use are: Washed, Natural and Honey,
                obtaining a parchment coffee that is then dried on African beds indoors,
                to avoid direct contact with the sun.</p>
 
             <h2 className="text-left">SEMI-WASHED</h2>

             <p>
              Unlike the washed process, the semi-washed is left to ferment for about 4 hours,
              so that the grain acquires the properties of honey from the peel, after this,
              it’s washed, and the mucilage is completely removed.
              
               </p>
               <div className="Dream">
                <img src="assets/images/Semi-Washed.jpg"/>
               
                </div>
  

              <h2 className="text-left">WASHED</h2>

              <p>
                
              In this process, the mucilage is completely removed, and it uses a lot of water.
              After the grain has been depulped, the next step is the total removal of the mucilage,
               which it can be in two ways, mechanically or by fermentation. When is done by 
               fermentation, the parchment grain is allowed to stand in water for about 24 hours
              (This may depend on weather conditions).
             </p>


             <div className="Dream">
              <img src="assets/images/WashedCoffee.jpg"/>
             
              </div>


            </div>
            <div>
                <h2 className="text-right">HONEY</h2>
                <p>
                  In this process, there is no use of water and the grain is depulped and left
                  to dry with the honey from the peel removed, which is completely absorbed by 
                  the coffee bean acquiring many properties of sweetness, the drying time 
                  depends on the amount of honey in the coffee, also the color of parchment grain,
                  that it can be yellow, black and red.
                </p>

                <div className="Dream">
                  <img src="assets/images/honeycoffee.jpg"/>
                 
                </div>
    


                 <h2 className="text-right">NATURAL</h2>
                 <p>
                  his process is simpler, like the honey, there’s not used water, all the picked
                  grain is left to dry on African beds, with this process the coffee bean
                  acquires many properties which make it get a high content of sweetness, 
                  the storage of coffee with this process can last longer. </p>

                  <div className="Dream">
                    <img src="assets/images/naturalcoffee.jfif"/>
                   
                    </div>
      

      
                <h2 className="text-right">QUALITY ASSURANCE</h2>

                <p>
                  All our parchment coffees are carefully reviewed to determine grains with 
                  primary or secondary defects.

                  After the coffee parchment is dried on beds, it’s stored for
                  a minimum of 30 days, so that it expresses itself, after this period,
                  it will be threshed to remove the parchment (or pulp if it’s a 
                  natural process), and then obtain coffee that we call "Oro de Chorro", 
                  which is examined by a group of workers with a high capacity developed
                  for the identification of possible defects, then the coffee is
                  classNameified according to the “zaranda” size of the grain
                  (size of the final raw or green coffee).
                  </p>

            </div>
          </div>
        </div>

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
