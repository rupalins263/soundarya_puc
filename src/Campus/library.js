import React,{Component} from 'react';
import '../Contact/Contact.css';
import './Infra.css';
export default class library extends Component
{
    render()
    {
        return(
           <div className="container content">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Library</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Library</li>
                        </ul>
                    </div>
                </header> 
                <div className="container page-content">
                    <div className="row page-row">
                      <div className="col-md-9 col-sm-9 col-lg-9">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                
                                <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                 <li data-target="#myCarousel" data-slide-to="3"></li>
                                </ol>

                               
                                <div className="carousel-inner">
                                <div className="item active">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152816/lib-1_m5lupl.jpg" alt="Los Angeles" style={{"width":"100%",height:"400"}}/>
                                </div>

                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152834/lib-4_rynlxn.jpg" alt="Chicago" style={{"width":"100%",height:"400"}}/>
                                </div>
                                
                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152824/lib-2_gg91dr.jpg" alt="Chicago" style={{"width":"100%",height:"400"}}/>
                                </div>
                                <div className="item">
                                    <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506152834/lib-4_rynlxn.jpg" alt="Chicago" style={{"width":"100%",height:"400"}}/>
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
                          
                            {/*
                            
                              Library Things
                            
                            */}
                        <div style={{"margin-top":"50px",marginBottom:10}}>
                              <h2 className="title sub-heading">Question Papers</h2>
                        </div>
                         <div style={{marginTop:"30px"}}>

                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                        CET QuestionPapers</a>
                                    </h4>
                                    </div>
                                        <div id="collapse1" className="panel-collapse collapse in">
                                                <div className="panel-body">
  


                                                         <div className="panel panel-default">
                                                                <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" data-parent="#collapse1" href="#collapse3">
                                                                    Physics</a>
                                                                </h4>
                                                                </div>
                                                                <div id="collapse3" className="panel-collapse collapse">
                                                                     <ul style={{margin:20}}>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/physics/phy2016.pdf">CET Physics-2016</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/physics/phy2015.pdf">CET Physics-2015</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/physics/phy2014.pdf">CET Physics-2014</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/physics/phy2013.pdf">CET Physics-2013</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/physics/phy2012.pdf">CET Physics-2012</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/physics/phy2011.pdf">CET Physics-2011</a></li>
                                                                    
                                                    
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                    
                                                       
                                                          <div className="panel panel-default">
                                                                <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" data-parent="#collapse1" href="#collapse31">
                                                                    Mathematics</a>
                                                                </h4>
                                                                </div>
                                                                <div id="collapse31" className="panel-collapse collapse">
                                                                     <ul style={{margin:20}}>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/maths2016.pdf">CET Mathematics-2016</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/maths2015.pdf">CET Mathematics-2015</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/maths2014.pdf">CET Mathematics-2014</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/mat2013.pdf">CET Mathematics-2013</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/mat2012.pdf">CET Mathematics-2012</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/mat2011.pdf">CET Mathematics-2011</a></li>
                                                                    
                                                    
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                               <div className="panel panel-default">
                                                                <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" data-parent="#collapse1" href="#collapse32">
                                                                    Chemistry</a>
                                                                </h4>
                                                                </div>
                                                                <div id="collapse32" className="panel-collapse collapse">
                                                                     <ul style={{margin:20}}>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/biology/bio2016.pdf">CET Chemistry-2016</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/biology/bio2015.pdf">CET Chemistry-2015</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/biology/bio2014.pdf">CET Chemistry-2014</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/biology/bio2013.pdf">CET Chemistry-2013</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/biology/bio2012.pdf">CET Chemistry-2012</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/biology/bio2011.pdf">CET Chemistry-2011</a></li>
                                                                    
                                                    
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                             <div className="panel panel-default">
                                                                <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" data-parent="#collapse1" href="#collapse33">
                                                                    Biology</a>
                                                                </h4>
                                                                </div>
                                                                <div id="collapse33" className="panel-collapse collapse">
                                                                     <ul style={{margin:20}}>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/maths2016.pdf">CET Biology-2016</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/maths2015.pdf">CET Biology-2015</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/maths2014.pdf">CET Biology-2014</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/mat2013.pdf">CET Biology-2013</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/mat2012.pdf">CET Biology-2012</a></li>
                                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/mathematics/mat2011.pdf">CET Biology-2011</a></li>
                                                                    
                                                    
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                                     <div className="panel panel-default">
                                                                <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" data-parent="#collapse1" href="#collapse34">
                                                                   CET Answers</a>
                                                                </h4>
                                                                </div>
                                                                <div id="collapse34" className="panel-collapse collapse">
                                                                     <ul style={{margin:20}}>
                                                                          <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/ans_2015.pdf">CET Answers-2015</a></li>
                                                                                <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/ans_2014.pdf">CET Answers-2014</a></li>
                                                                                <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/ans_2013.pdf">CET Answers-2013</a></li>
                                                                                <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/ans_2012.pdf">CET Answers-2012</a></li>
                                                                                <li><a href="http://zenopsys.net/soundarya_forms/library/cet_qp/ans_2011.pdf">CET Answers-2011</a></li>
                                                                            
                                                                            
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        
                                                </div>
                                        </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse20">
                                        JEE ADVANCED Question Paper</a>
                                    </h4>
                                    </div>
                                        <div id="collapse20" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <ul>
                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2017p1.pdf">JEE_ADVACED_QP1-2017</a></li>
                                                        <li><a href="http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/P2_2017.pdf">JEE_ADVACED_QP2-2017</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2016p2key.pdf'>JEE_ADVACED_QP2</a></li>
                                                         <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2016p1key.pdf'>JEE_ADVACED_QP3</a></li>
                                                         <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2015p2.pdf'>JEE_ADVACED_QP4</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2015p1.pdf'>JEE_ADVACED_QP5</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2014p2.pdf'>JEE_ADVACED_QP6</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2014p1.pdf'>JEE_ADVACED_QP7</a></li>
                                                       <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2013p2.pdf'>JEE_ADVACED_QP8</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2013p1.pdf'>JEE_ADVACED_QP9</a></li>
                                                      <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2012p2.pdf'>JEE_ADVACED_QP10</a></li>
                                                       <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2012p1.pdf'>JEE_ADVACED_QP11</a></li>
                                                      <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2011p2.pdf'>JEE_ADVACED_QP12</a></li>
                                                      <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2011p1.pdf'>JEE_ADVACED_QP13</a></li>
                                                      <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2010p2.pdf'>JEE_ADVACED_QP14</a></li>
                                                      <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2010p1.pdf'>JEE_ADVACED_QP15</a></li>
                                                      <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2009p2.pdf'>JEE_ADVACED_QP16</a></li>
                                                      <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2009p1.pdf'>JEE_ADVACED_QP17</a></li>
                                                     <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2008p2.pdf'>JEE_ADVACED_QP18</a></li>
                                                      <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2008p1.pdf'>JEE_ADVACED_QP19</a></li>
                                                    <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2007p2.pdf'>JEE_ADVACED_QP20</a></li>
                                                    <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_ADVACED_QP/2007p1.pdf'>JEE_ADVACED_QP21</a></li>
                                                                                                                
                                                 </ul>
                                                        
                                                </div>
                                        </div>
                                </div>

                             </div>
                                   <div className="panel panel-default">
                                    <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse21">
                                        JEE Main Question Paper</a>
                                    </h4>
                                    </div>
                                        <div id="collapse21" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <ul>
                                                       <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/Paper02 SRB English_Hindi SetY-2017.pdf'>JEE Main Question Paper-1</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/Paper02 SRB English_Hindi SetX-2017.pdf'>JEE Main Question Paper-2</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/Paper02 SRB English_Hindi SetW-2017.pdf'>JEE Main Question Paper-3</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/Paper01_RBS_English_Hindi_SetD-2017.pdf'>JEE Main Question Paper-4</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/Paper01_RBS_English_Hindi_SetC-2017.pdf'>JEE Main Question Paper-5</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/Paper01_RBS_English_Hindi_SetB-2017.pdf'>JEE Main Question Paper-6</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/Paper01_RBS_English_Hindi_setA-2017.pdf'>JEE Main Question Paper-7</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/04 Apr 2015 D.pdf'>JEE Main Question Paper-8</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/04 Apr 2015 C.pdf'>JEE Main Question Paper-9</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/04 Apr 2015 B.pdf'>JEE Main Question Paper-10</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/06.04.2014H.pdf'>JEE Main Question Paper-11</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/06.04.2014G.pdf'>JEE Main Question Paper-12</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/06.04.2014F.pdf'>JEE Main Question Paper-13</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/JEE MAIN-2014-P2.pdf'>JEE Main Question Paper-14</a></li>
                                                        <li><a href='http://zenopsys.net/soundarya_forms/library/JEE_MAIN_QP/JEE MAIN-2014 MAIN.pdf'>JEE Main Question Paper-15</a></li>
                                                                                                                
                                                 </ul>
                                                        
                                                </div>
                                        </div>
                                </div>

                  
  

                     </div>

                             {/*
                            
                              Library Things
                            
                            */}
                          <div style={{"margin-top":"50px"}}>
                              <h2 className="title sub-heading" >Beautiful urban campus </h2>
                              <p style={{"text-align":"justify"}}>Expansive college greens and recreational spaces. Landmark architecture. Four schools and a college connected on a single campus. </p>
                            </div>
                             <div style={{"margin-top":"50px"}}>
                              <h2 className="title sub-heading">Integrated knowledge</h2>
                              <p style={{"text-align":"justify"}}>Expansive college greens and recreational spaces. Landmark architecture. Four schools and a college connected on a single campus. </p>
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
