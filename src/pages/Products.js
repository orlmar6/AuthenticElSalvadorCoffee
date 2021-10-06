
import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
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
<li><Link to="/ContactUs">Contact Us</Link></li><br/>
<br/>
<br/>
<li><Link to="/CoffeeProcess">Coffee Process</Link></li>
<li className="current"><Link to="/Products">Shop</Link></li>
<li><Link to="/SignIn">Sign In</Link></li>
            
            <i className="material-icons">&#xe7fd;</i>
                               
          </ul>  
         </nav>
     </div>
    </header>


    <section className="container content-section">
        <h2 className="section-header">Coffee Products</h2>
        <div className="shop-items">
            <div className="shop-item">

                <span className="shop-item-title">Arabica, light Roast</span>
                <img className="shop-item-image" src="assets/Images/Product26.jpg"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$18.99</span>
                    <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>

                </div>
            </div>
            <div className="shop-item">
                <span className="shop-item-title">Light Roast, Ground Coffee</span>
                <img className="shop-item-image" src="assets/Images/Product23.png"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$19.50</span>
                    <button className="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
                </div>
            </div>
            <div className="shop-item">
                <span className="shop-item-title">El Salvador, Ground, Special</span>
                <img className="shop-item-image" src="assets/Images/Product4.jpg"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$17.00</span>
                    <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                </div>
            </div>
          
        </div>
    </section>


    <section className="container content-section">
        <div className="shop-items">
            <div className="shop-item">
                <span className="shop-item-title">Whole Roast</span>
                <img className="shop-item-image" src="assets/Images/Product18.jfif"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$16.25</span>
                    <button className="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
                </div>
            </div>
            <div className="shop-item">
                <span className="shop-item-title">Bourbon, Single Estate</span>
                <img className="shop-item-image" src="assets/Images/Product26.jfif"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$19.00</span>
                    <button className="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
                </div>
            </div>
            <div className="shop-item">
                <span className="shop-item-title">Bourbon, Typica</span>
                <img className="shop-item-image" src="assets/Images/Product24.jpg"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$14.99</span>
                    <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                </div>
            </div>
          
        </div>
    </section>

    <section className="container content-section">
        
        <div className="shop-items">
            <div className="shop-item">
                <span className="shop-item-title">Single Origin, Aromatico</span>
                <img className="shop-item-image" src="assets/Images/Product22.jfif"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$13.99</span>
                    <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                </div>
            </div>
            <div className="shop-item">
                <span className="shop-item-title">Artisan Roast</span>
                <img className="shop-item-image" src="assets/Images/Product21.jfif"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$18.00</span>
                    <button className="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
                </div>
            </div>
            <div className="shop-item">
                <span className="shop-item-title">Medium Roast</span>
                <img className="shop-item-image" src="assets/Images/Product20.jfif"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$15.75</span>
                    <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                </div>
            </div>
          
        </div>
    </section>
    <section className="container content-section">
        
        <div className="shop-items">
            <div className="shop-item">
                <span className="shop-item-title">Artisan Roast, Pacamara</span>
                <img className="shop-item-image" src="assets/Images/Product10.jpg"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$14.99</span>
                    <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                </div>
            </div>
            <div className="shop-item">
                <span className="shop-item-title">Artisan Roast, Gourmet</span>
                <img className="shop-item-image" src="assets/Images/Product15.jfif"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$16.50</span>
                    <button className="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
                </div>
            </div>
            <div className="shop-item">
                <span className="shop-item-title">Orange Bourbon</span>
                <img className="shop-item-image" src="assets/Images/Product19.jfif"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">$13.00</span>
                    <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                </div>
            </div>
          
        </div>
    </section>

    <section className="container content-section">
        <h2 className="section-header">Cart</h2>
        <div className="cart-row">
            <span className="cart-item cart-header cart-column">ITEM</span>
            <span className="cart-price cart-header cart-column">PRICE</span>
            <span className="cart-quantity cart-header cart-column">QUANTITY</span>
        </div>
        <div className="cart-items">
            <div className="cart-row">
                <div className="cart-item cart-column">
                    <img className="cart-item-image" src="assets/Images/Product26.jpg" width="100" height="100"/>
                    <span className="cart-item-title">Light Roast, Ground Coffee</span>
                </div>
                <span className="cart-price cart-column">$19.99</span>
                <div className="cart-quantity cart-column">
                    <input className="cart-quantity-input" type="number" value="1"/>
                    <button className="btn btn-danger" type="button">REMOVE</button>
                </div>
            </div>
            <div className="cart-row">
                <div className="cart-item cart-column">
                    <img className="cart-item-image" src="assets/Images/Product20.jfif" width="100" height="100"/>
                    <span className="cart-item-title">Medium Roast</span>
                </div>
                <span className="cart-price cart-column">$9.99</span>
                <div className="cart-quantity cart-column">
                    <input className="cart-quantity-input" type="number" value="2"/>
                    <button className="btn btn-danger" type="button">REMOVE</button>
                </div>
            </div>
        </div>

        
        <div className="cart-total">
            <strong className="cart-total-title">Total</strong>
            <span className="cart-total-price">$39.97</span>
        </div>
        <button className="btn btn-primary btn-purchase" type="button">PURCHASE</button>
    </section>


   
    <section id="FooterPhoto3">
<div className="container">   </div> 
    
   
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










