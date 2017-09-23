import React, { Component } from 'react';
import {Switch,Link,Route}from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import HomeIndex from './Home/HomeIndex';
import ContactUs from './Contact/Contact';
import Carrier from './Contact/Carrier';
import Alumini from './Contact/Alumini';
import Media from './Faculty/Media';
import Admission from './Contact/Admission';
import Downloads from './Contact/Downloads';
import About from './About/About';
import Privacy from './About/Privacy';
import Mission from './About/Mission';
import Assesment from './Academics/Assesment';
import Coarse from './Academics/Course';
import Department from './Academics/Department';
import Cocurricuar from './Academics/Cocurricuar';
import SpecialCoarse from './Academics/SpecialCoarse';
import './App.css';
import Contact from './Faculty/Contact';
import Faculty from './Faculty/Faculty';
import Infra from './Campus/Infra';
import Library from './Campus/library';
import Lab from './Campus/Lab';
import Caf from './Campus/Cafeteria';
import Councel from './Campus/Councel';
import News from './News/News';
import Gallery from './Gallery/Gallery';
class App extends Component {
 
   
  render() {
    return (
      <div>
       <Nav/>
       <Switch>
                <Route  exact path="/" component={HomeIndex}/>
                <Route exact path="/ContactUs" component={ContactUs}/>
                <Route exact path="/Carrier" component={Carrier}/>
                <Route exact path="/Alumini" component={Alumini}/>
                <Route exact path="/Media" component={Media}/>
                <Route exact path="/Admission" component={Admission}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Mission" component={Mission}/>
                <Route exact path="/News" component={News}/>
                   <Route exact path="/News/1" component={News}/>
                      <Route exact path="/News/2" component={News}/>
                         <Route exact path="/News/3" component={News}/>
                <Route exact path="/Assesment" component={Assesment}/>
                <Route exact path="/Coarse" component={Coarse}/>
                <Route exact path="/Department" component={Department}/>
                <Route exact path="/Cocurricuar" component={Cocurricuar}/>
                <Route exact path="/SpecialCoarse" component={SpecialCoarse}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/Faculty" component={Faculty}/>
                <Route exact path="/Infra" component={Infra}/> 
                <Route exact path="/Library" component={Library}/> 
                <Route exact path="/Lab" component={Lab}/> 
                <Route exact path="/Caf" component={Caf}/> 
                 <Route exact path="/Councel" component={Councel}/>

                 <Route exact path="/Admission" component={Admission}/>
                    <Route exact path="/Downloads" component={Downloads}/>
                  <Route exact path="/Gallery" component={Gallery}/>
                    <Route exact path="/Privacy" component={Privacy}/>
               
       </Switch>
       <Footer/>
      </div>
    );
  }
}

export default App;
