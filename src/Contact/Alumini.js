import React,{Component} from 'react';
import './Contact.css';

export default class Alumini extends Component{
    render(){
        return(
    
        <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Soundarya Educational Trust Alumni</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Alumni</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                                                                                
                            <p><strong>Objectives of Alumni</strong></p>
                                <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> To encourage, foster and promote close relation between Soundarya Pre-University college and its Alumni</li>
                                <li><i className="fa fa-hand-o-right"></i> To provide and disseminate information regarding the institution, progresses, facilities, upcoming events, career prospects and guidance to Alumni</li>                              
                                <li><i className="fa fa-hand-o-right"></i> To ensure that programs are initiated and developed for the benefit of the Alumni.</li>                              
                                <li><i className="fa fa-hand-o-right"></i> To guide and assist Alumni who have recently completed the courses of study to obtain the degree courses and engage in productive pursuits</li>                              
                                <li><i className="fa fa-hand-o-right"></i> To establish a network with all the students and with the community</li>                              
                                <li><i className="fa fa-hand-o-right"></i> To develop skills for entrepreneur and personality development</li>                              
                           </ul>                            
                           
                           
                           
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
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
                        </aside>
                    </div>
                </div>
            </div> 
        </div>
         
        )

    }
}