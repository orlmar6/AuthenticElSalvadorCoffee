import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import database from '../firebase';


const ContactUs = () => {

  const [name , setName] = useState();
  const [subject , setSubject] = useState();
  const [phone , setPhone] = useState();
  const [email , setEmail] = useState();
  const [message , setMessage] = useState();
      
  // Submit Function
  const Submit = () => {
    database.ref("user").set({
      name : name,
      subject : subject,
      phone : phone,
      email : email,
      message : message,
    }).catch(alert);
  }



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
        <li className="current"><Link to="/ContactUs">Contact Us</Link></li>
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

<section id="ContactUSphoto">
    <div className="container">
        <h1>CONTACT US</h1>
       
    </div>
</section>
<br/>

<section className="section-contact">
<div className="container1">
<div className="content">
    <div className="left-side">
        <div className="address details">
            <i className="material-icons">&#xe55f;</i>
            <div className="topic">Address</div>
            <div className="text-one">Km. 4 1/2,</div>
            <div className="text-two">Ahuachapán, </div>
            <div className="text-three">El Salvador</div>
        </div>
        <div className="phone details">
            <i className="material-icons">&#xe551;</i>
            <div className="topic">Phone</div>
            <div className="text-one">+(503)7150-4573</div>
            <div className="text-two">+(503)7150-4574</div>
            
        </div>
        <div className="email details">
            <i className="material-icons">&#xe554;</i>
            <div className="topic">Email</div>
            <div className="text-one">elsalvadorcoffee@gmail.com</div>
            <div className="text-one">info.elsalvadorcoffee@gmail.com</div>
            
        </div>

    </div>

    <div className="right-side">
        <div className="topic-text">GET IN TOUCH WITH US</div>

    
        <br/>
        <p>Complete the form below to get started</p>

        <div id="error_message"></div>
        <form action="" id="myform">
          <div className="input-box">
            <input type="text" placeholder="Name" required="" id="name" value={name} 
             onChange={(e) => setName(e.target.value)}   />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Subject" required="" id="subject" value={subject}
          onChange={(e) => setSubject(e.target.value)}  />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Phone" required="" id="phone" value={phone}
            onChange={(e) => setPhone(e.target.value)}  />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required="" id="email"value={email}
             onChange={(e) => setEmail(e.target.value)}  />
          </div>
          <div className="input-box">
            <textarea placeholder="Message"  id="message" value={message}
             onChange={(e) => setMessage(e.target.value)} ></textarea>
          </div>
          <div className="btn">
          <input type="submit"  onClick={Submit}   value="Send Message"  />
        
     
          </div>
        </form>
    </div>
</div>  



<div className="MapPhoto"></div>  

</div>
</section>



<br/>


<section id="FooterPhoto2">
<div className="container"></div>        
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
};


export default ContactUs;

















