import React,{Component} from 'react';
import '../Contact/Contact.css';
import './Infra.css';
export default class Cafeteria extends Component
{
    render()
    {
        return(
           <div className="container content">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Housing and dinning</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Housing and dinning</li>
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
                                <li data-target="#myCarousel" data-slide-to="5"></li>
                                 <li data-target="#myCarousel" data-slide-to="6"></li>
                                </ol>

                               
                                <div className="carousel-inner">
                                <div className="item active">
                                    <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506151596/canteen-1_vooc4k.jpg" alt="Los Angeles" style={{"width":"100%"}}/>
                                </div>

                                <div className="item">
                                    <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506151601/canteen-2_fmll09.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                
                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506151607/canteen-3_z2qbxl.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                <div className="item">
                                    <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506151611/canteen-4_tlkdlk.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                <div className="item">
                                    <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506151614/canteen-5_jwfdql.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                
                                <div className="item">
                                    <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506151620/canteen-6_tyilvp.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                <div className="item">
                                    <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506151626/canteen-7_oazixy.jpg" alt="Chicago" style={{"width":"100%"}}/>
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
                              <h2 class="title sub-heading" >Cafeteria</h2>
                              <p style={{"text-align":"justify"}}>Bon apetite at soundarya dinning recognizes the great power and importance of food. Dinning rooms are gathering places, and breaking the bread together helps create a sense of community and comfort.</p>
                            </div>
                        
                      </div>
                      <div className="col-md-3 col-sm-3 col-lg-3">
                          <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
								<li><i className="fa fa-caret-right"></i><a href="/#/Faculty">Faculty </a></li>
									<li><i className="fa fa-caret-right"></i><a href="/#/Infra">Infrastructure</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/#/Library">Library</a></li>
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
