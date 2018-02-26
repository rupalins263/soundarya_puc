import React,{Component} from 'react';
import '../App.css';
import './Nav.css';
class Nav extends Component{

   componentDidMount(){
       switch(window.location.pathname)
       {
          
       }
    }
    render(){
        return(
          <div style={{"marginBottom":"30px"}}>
          <div className="header">
            <div className="headerr">
               <div className="container " style={{"text-align": "right"}}>              
                  
                    <div className="other-branch"><a className="headA" href="http://central.soundaryainstitutions.in">SOUNDARYA CENTRAL SCHOOL</a></div>
                    <div className="other-branch"><a className="headA" href="http://school.soundaryainstitutions.in">SOUNDARYA SCHOOL</a></div>
                    <div className="other-branch"><a className="headA"  href="http://puc.soundaryainstitutions.in">SOUNDARYA PU COLLEGE</a></div>     
                    <div className="other-branch"><a className="headA" href="http://sims.soundaryainstitutions.in">SIMS</a></div>
                     
                </div>
              </div>
                <div className="header-main container">
                <h1 className="logo col-md-6 col-sm-6">
                    <a href="/" style={{"text-decoration": "none"}}>
                        <img id="logo" src="http://res.cloudinary.com/dzrelou7q/image/upload/v1503155295/Logo_dts0t4.jpg" alt="Logo"/>
                        <h1 style={{"display":"inline-block","margin-top":"6%","font-size":"38px"}}>Soundarya PU College</h1>
                    </a>
                </h1>         
                <div className="info col-md-6 col-sm-6">
                    <div className="menu-top navbar-right hidden-xs txt-Social">
                        <span className="espan"><a href="#" style={{ color: "#444"}}>Social Connect :</a></span>
                        <span className="espan"><a href="https://www.facebook.com/SoundaryaSchool/" target="_blank" style={{ color: "#444"}}><i className="fa fa-facebook"></i></a></span>
                        <span className="espan"><a href="#" style={{ color: "#444"}}><i className="fa fa-linkedin"></i></a></span>
                        <span className="espan"><a href="#" style={{ color: "#444"}}><i className="fa fa-google-plus"></i></a></span>
                    </div>
                    <br/>
                    <div className="contact pull-right">
                        <span className="phone txt-phn"><i className="fa fa-phone espan"></i>Call us today 080-28390024</span> 
                        <span className="phone txt-phn"><i className="fa fa-envelope espan"></i><a href="mailto:soundaryapucollege@gmail.com">soundaryapucollege@gmail.com</a></span>

                    </div>
                </div>
            </div>
          </div>
  <div className="container-fluid main-nav">
    <div className="container">
    <nav className="navbar navbar-default " style={{"background-color":"#660000","border":"none","margin-bottom": "0px",color:"white !important"}}>
   
  <div className="container-fluid">


   
    <div className="collapse navbar-collapse nav-a" style={{paddingTop:"5px"}} id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
           <li><a href="/" className="navf"  id="HOME">HOME</a></li>
          
         <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/#/About">ABOUT SOUNDARYANS</a></li>
            <li><a href="/#/About#mission">VISION AND MISSION </a></li>
            <li><a href="/#/Management">LEADERSHIP/BOARD-OF-MEMBERS</a></li>
           
          </ul>
        </li>
 
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ACADEMICS<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/#/Course">COURSE OFFERED</a></li>
            <li><a href="/#/Assesment">ASSESSMENT PLAN </a></li>
            <li><a href="/#/Department">DEPARTMENT</a></li>
            <li><a href="/#/Cocurricuar">CO-CURRICULAR</a></li>
             <li><a href="/#/SpecialCourse"> SPECIAL COURSES</a></li>
          </ul>
        </li>
           <li><a href="/#/Faculty">FACUALTY</a></li>
          <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ADMISSSIONS<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/#/Admission">ADMISSIONS</a></li>
            <li><a href="/#/Downloads">DOWNLOADS</a></li>
          </ul>
        </li>
     
         <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CAMPUS LIFE<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/#/Infra">INFRASTRUCTURE</a></li>
            <li><a href="/#/Library">LIBRARY</a></li>
            <li><a href="/#/Lab">LABS</a></li>
            <li><a href="/#/Caf">CAFETERIA</a></li>
            <li><a href="/#/Councel">COUNCELLING CELL</a></li>
           
          </ul>
        </li>
          <li><a href="/#/News">NEWS & EVENTS</a></li>
         <li><a href="/#/Media">MEDIA</a></li>
         <li><a href="/#/Gallery">GALLERY</a></li>
         <li><a href="/#/Alumini">ALUMINI</a></li>
         <li><a href="/#/Contact">CONTACT US</a></li>
      
      </ul>
    </div>
  </div>
  </nav>
</div>
</div>
</div>
       )
    }
}


export default Nav;