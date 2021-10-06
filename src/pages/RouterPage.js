import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import ContactUs from './ContactUs'
import CoffeeProcess from './CoffeeProcess'
import SignIn from './SignIn'
import Products from './Products'


export default function RouterPage() {
    return (
        <div>
         <Router>
             <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/About" component={About}/>
               <Route path="/Gallery" component={Gallery}/>
               <Route path="/ContactUs" component={ContactUs}/>
               <Route path="/CoffeeProcess" component={CoffeeProcess}/>
               <Route path="/SignIn" component={SignIn}/>
               <Route path="/Products" component={Products}/>
              
             </Switch>
         </Router>
        </div>
    )
}
