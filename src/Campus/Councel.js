import React,{Component} from 'react';
import '../Contact/Contact.css';
import './Infra.css';
export default class Councel extends Component
{
    render()
    {
        return(
           <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Counselling cell</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Counselling-cell</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                         
                            
                           
                            <p style={{"text-align":"justify"}}> Extensive research have been conducted to understand the global and local market requirements.  On the basis of demand to supply module, the present scenario has been made to known the students and parents  time to time.  With the continued efforts and research, the students are counseled</p>
                            <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> To chose right course and content for the overall development of a student</li>
                                <li><i className="fa fa-hand-o-right"></i> Regular guest lectures are arranged to know what is after PUC.</li>                              
                                <li><i className="fa fa-hand-o-right"></i> Science students exposed to various courses available like Engineering, Medicine, Paramedical Courses, Clinical courses, Forensic science, Agricultural science, Pure Sciences etc.</li>                              
                                <li><i className="fa fa-hand-o-right"></i> Commerce students encouraged to take up courses like CPT, Law, Foundation for CA/ICWAI, ACS, BBM, BCA etc.</li>                              
                           </ul>                           
                         <div className="col-md-6">  
                              <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506152106/councilling-1_sggfye.png" alt="councilling-1"/>
                         </div>
                         <div className="col-md-6">  
                              <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506152107/councilling-2_xmhtwy.png" alt="councilling-1"/>
                         </div>
                         <div className="col-md-12">
                         <h2 className="title sub-heading">Parents</h2>
                         <p style={{"text-align":"justify"}}>The Soundarya Educational Trust reminds me of the Gurukal of yester years where emphasis were given not only on education but on living a life of self respect, dignity and thus has transformed my ward into a refined fabric of society.</p>                           
                         <h2 className="title sub-heading">Objectives</h2> 
                         <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> To provide easy access for parents to reach us</li>
                                <li><i className="fa fa-hand-o-right"></i> Proactive participation of parents in shaping our students future.</li>                              
                                <li><i className="fa fa-hand-o-right"></i> To get first hand update on their ward's progress.</li>                                    
                           </ul>                          
                          <p style={{"text-align":"justify"}}>College authorities will be sending periodical updates on students attendance, performance in term examinations etc., to the parents. Parents are requested to stay in regular touch with their son/daughter, studying at Indian Academy institutes, and take necessary initiatives and offer proper guidance and help them to do well in their academic endeavors. </p>                             
                        </div>
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
									<li><i className="fa fa-caret-right"></i><a href="/Faculty">Faculty </a></li>
									<li><i className="fa fa-caret-right"></i><a href="/Infra">Infrastructure</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/Library">Library</a></li>
                                </ul>
                                
                            </section>
                            
                            <section className="widget">
                                <h3 className="title">Contact</h3>
                                <p><b>Soundarya PU College</b><br/> Havanoor Extension,<br/> Hesaraghatta Main Road,<br/> Nagasandra Post, Near 8th Mile,<br/> Bangalore-560073</p>
                                <p className="tel"><i className="fa fa-phone"></i>Tel: 080-28390024</p>
                                <p className="email"><i className="fa fa-envelope"></i>Email: <a href="#">soundaryapucollege@gmail.com</a></p>
                            </section> 
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        )
        }
  }