import React,{Component} from 'react';
import '../Contact/Contact.css';
import './Infra.css';
export default class Lab extends Component
{
    render()
    {
        return(
           <div className="container content">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Laboratories /Lecture Halls</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Labs</li>
                        </ul>
                    </div>
                </header> 
                <div className="container page-content">
                    <div className="row page-row">
                      <div className="col-md-9 col-sm-9 col-lg-9">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                
                                <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                 <li data-target="#myCarousel" data-slide-to="3"></li>
                                 <li data-target="#myCarousel" data-slide-to="4"></li>
                                </ol>

                               
                                <div className="carousel-inner">
                                <div className="item active">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152595/lab-1_eooqsc.jpg" alt="Los Angeles" style={{"width":"100%"}}/>
                                </div>

                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152600/lab-2_g4ujkp.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                
                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152607/lab-3_rlyuaz.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152611/lab-4_eovww9.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                     <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152616/lab-5_nahppe.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                </div>

                                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div style={{"margin-top":"50px"}}>
                            
                              <p style={{"text-align":"justify"}}>Lecture Halls and Seminar Halls at Soundarya Composite PU College has spacious and well lit with good ventilation. All lecture halls have functionally designed modern furniture. Lecture halls have been provided with educational aids like slide projectors, overhead/LCD projectors and computers.

                                      </p>  <p>Soundarya Composite PU College provides a full array of scientific and professional laboratories with student access to latest technologies. Our Computer Science lab is equipped with computers having latest hardware configuration. All the systems are in a networked environment whose hardware and software is continuously upgraded in tune with our requirements and changes in computer technology.

                                      </p><p>  Our Laboratories for Biology, Physics, Chemistry and Computer Science are well designed and adequately equipped. Laboratory batches are small and the individual attention is the rule not the exception. 
                             </p>
                            </div>
                                                                
                           </div>
                      <div className="col-md-3 col-sm-3 col-lg-3">
                          <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
									<li><i className="fa fa-caret-right"></i><a href="/Faculty">Faculty </a></li>
									<li><i className="fa fa-caret-right"></i><a href="/Lab">Labs</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/Library">Library</a></li>
                                </ul>
                                
                            </section>
                             <section className="widget">
                                <h3 className="title">Contact</h3>
                                <p><b>Soundarya PU College</b><br/> Havanoor Extension,<br/> Hesaraghatta Main Road,<br/> Nagasandra Post, Near 8th Mile,<br/> Bangalore-560073</p>
                                <p className="tel"><i className="fa fa-phone"></i>Tel: 080-28390024</p>
                                <p className="email"><i className="fa fa-envelope"></i>Email: <a href="#">soundaryapucollege@gmail.com</a></p>
                            </section>
                      </div>
                    </div>
                </div>
            </div>
        </div>
          
        )
    }
}
