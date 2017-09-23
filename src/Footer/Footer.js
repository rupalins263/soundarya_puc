import React,{Component} from 'react';
import './Footer.css';
export default class Footer extends Component{
    render(){
        return(
          <footer className="footer">
        <div className="footer-content">
            <div className="container">
                <div className="row">
                <div className="footer-col col-md-2 col-sm-3 about">
                    <div className="footer-col-inner">
                        <h3>About</h3>
                        <ul>
                            <li><a href="/About"><i className="fa fa-caret-right"></i>About us</a></li>
                            <li><a href="/Mission"><i className="fa fa-caret-right"></i>Management</a></li>
                            <li><a href="Coarse"><i className="fa fa-caret-right"></i>Courses Offered</a></li>
                            <li><a href="/Privacy"><i className="fa fa-caret-right"></i>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-col col-md-2 col-sm-3 about">
                    <div className="footer-col-inner">
                        <h3>More Links</h3>
                        <ul>
                            <li><a href="/SpecialCoarse"><i className="fa fa-caret-right"></i>Special Courses</a></li>
                            <li><a href="/Library"><i className="fa fa-caret-right"></i>Library</a></li>
                            <li><a href="/Lab"><i className="fa fa-caret-right"></i>Labs</a></li>
                            <li><a href="/Councel"><i className="fa fa-caret-right"></i>Counselling cell</a></li>
                            
                        </ul>
                    </div>
                </div>
                
                <div className="footer-col col-md-2 col-sm-3 about">
                    <div className="footer-col-inner">
                        <h3>&nbsp;</h3>
                        <ul>
                            <li><a href="/Infra"><i className="fa fa-caret-right"></i>Infrastructure</a></li>
                            <li><a href="/Faculty"><i className="fa fa-caret-right"></i>Teaching Staff</a></li>
                            <li><a href="/Alumini"><i className="fa fa-caret-right"></i>Alumni</a></li>
                            <li><a href="/ContactUs"><i className="fa fa-caret-right"></i>Contact Us</a></li>
                            
                        </ul>
                    </div>
                    </div>

                <div className="footer-col col-md-4 col-sm-3 contact">
                        <h3>Contact us</h3>
                        <div className="row">
                            <p className="adr clearfix col-md-12 col-sm-4">
                                <i className="fa fa-map-marker pull-left"></i>        
                                <span className="adr-group">       
                                    <span className="street-address">Soundarya PU College,<br/>
									<i  style={{"visibility": "hidden"}} className="fa fa-map-marker pull-left"></i>  Havanoor Extension, Hesaraghatta Main Road,<br/>
									<i className="fa fa-map-marker pull-left" style={{"visibility": "hidden"}}></i> Nagasandra Post, Near 8th Mile,<br/>
									<i className="fa fa-map-marker pull-left" style={{"visibility": "hidden"}}></i> Bangalore-560073<br/>
									<i className="fa fa-phone"></i>080-28390024 &nbsp;
									<i className="fa fa-envelope"></i><a href="#">soundaryapucollege@gmail.com</a>  
									</span>
                                    
                                </span>
                            </p>                           
                        </div> 
                       
                </div>  
				<div className="footer-col col-md-2 col-sm-3 contact">
					<p>&nbsp;</p>
					<div className="row text-right">
						<img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1505979470/lms-jas_pwafdo.jpg" style={{"max-width":"100%","max-height":"141px"}}/>
					</div> 
                     
                </div>
                </div>   
            </div>        
        </div>
        <div className="bottom-bar">
            <div className="container">
                <div className="row">
                    <small className="copyright col-md-6 col-sm-12 col-xs-12">Copyright @ 2015. All Rights Reserved.</small>
                    <div className="col-md-6 col-sm-12 col-xs-12 pull-right" style={{"margin-top": "8px"}}><small className="pull-right">Designed by Akriveia Technologies</small></div>
                    
                </div>
            </div>
        </div>
    </footer>
        )
    }
}