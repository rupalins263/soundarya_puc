import React,{Component} from 'react';
import '../Contact/Contact.css';
import './Infra.css';
export default class Infra extends Component{
    render(){
        return(
        <div className="container content">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Infrastructure</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Infrastructure</li>
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
                                </ol>

                               
                                <div className="carousel-inner">
                                <div className="item active">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152344/infra-1_zoa3wh.jpg" alt="Los Angeles" style={{"width":"100%"}}/>
                                </div>

                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152350/infra-2_v2pjdg.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                
                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152354/infra-3_ie9n5c.jpg" alt="Chicago" style={{"width":"100%"}}/>
                                </div>
                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152358/infra-4_rfvzm9.jpg" alt="Chicago" style={{"width":"100%"}}/>
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
                              <h2 class="title sub-heading" >Beautiful urban campus </h2>
                              <p style={{"text-align":"justify"}}>Expansive college greens and recreational spaces. Landmark architecture. Four schools and a college connected on a single campus. </p>
                            </div>
                             <div style={{"margin-top":"50px"}}>
                              <h2 class="title sub-heading">Integrated knowledge</h2>
                              <p style={{"text-align":"justify"}}>Expansive college greens and recreational spaces. Landmark architecture. Four schools and a college connected on a single campus. </p>
                            </div>
                      </div>
                      <div className="col-md-3 col-sm-3 col-lg-3">
                          <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
									<li><i className="fa fa-caret-right"></i><a href="/#/Faculty">Faculty </a></li>
									<li><i className="fa fa-caret-right"></i><a href="/#/Lab">Labs</a></li>
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