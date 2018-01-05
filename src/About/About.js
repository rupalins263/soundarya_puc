import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class About extends Component{
    render(){
        return(
           
            <div className="content container">
                    <div className="page-wrapper">
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left">About Soundaryans</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">About Soundaryans</li>
                                        </ul>
                                    </div>
                                </header> 
                                   
                                    <div className="page-content">
                                        <div className="row page-row">
                                            <article className="welcome col-md-8 col-sm-7">                         
                                           
                                                <p><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506150518/750x300-about_jpanrl.jpg" alt=""/></p>
                                                <p>‘Soundarya Educational Trust took its humble birth in the year 1993 under the auspices of Shri Shri Shri Vishwesha Theertha Swamiji. The Trust believes in the essence of the compositions of instilling excellence and inculcating values. Our prime objective is to impart quality education shielding the traditional values intact.</p>
                                                <p>Soundarya group of institutions comprising 4-elegent wings:</p>
                                                <ul className="custom-list-style">
                                                    <li><i className="fa fa-check"></i> Soundarya School</li>
                                                    <li><i className="fa fa-check"></i> Soundarya Central School (CBSE)</li>
                                                    <li><i className="fa fa-check"></i> Soundarya PU College</li>
                                                    <li><i className="fa fa-check"></i> Soundarya Institute Of Management &amp; Science</li>

                                                </ul>
                                                
                                                <h3 className="title" style={{"margin-top":"30px"}} id="/About#vision">Vision</h3>
                                            <blockquote className="custom-quote">
                                                    <p><i className="fa fa-quote-left"></i>To excel in the academic quarters by making education EXPERIMENTAL by instilling in students the instincts of exploration and groom them into enterpreneurs. The motto that dominates the work culture is to impart patriotism and education thoroughly and candidly and thus prove INDISPENSABLE to all and make the students feel contributed.</p>
                                                </blockquote>
                                            <h3 className="title" style={{"margin-top":"30px"}} id="/About#mission">Mission</h3>
                                            <blockquote className="custom-quote">
                                                    <p><i className="fa fa-quote-left"></i>To puruse excellence and set the pace in the field of P.U. Education. To initiate and promote experimentation and innovations in education and to develop the spirit of national integration and create a sense of Indianness among students.</p>
                                                </blockquote>
                                                <h3 className="title" style={{"margin-top":"30px"}}>Quality Policy</h3>
                                            <blockquote className="custom-quote">
                                                    <p><i className="fa fa-quote-left"></i>We shall impart the best holistic education instilling excellence and inculcating values which will suit the challenges of the competitive technology driven environment with continual improvement to make every student excel with continual improvement to make every student excel in scholastic and non –scholastic spheres with competency, commitment and compassion.</p>
                                                </blockquote>
                                            </article>
                                            <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                                                <section className="widget has-divider">
                                                    <h3 className="title">Related Links</h3>
                                                    <ul className="job-list custom-list-style">
                                                            <li><i className="fa fa-caret-right"></i><a href="/#/About">About Us</a></li>
                                                            <li><i className="fa fa-caret-right"></i><a href="/#/Management">Management </a></li>
                                                            <li><i className="fa fa-caret-right"></i><a href="/#/About#mission">Mission</a></li>
                                                            <li><i className="fa fa-caret-right"></i><a href="/#/About#vision">Vision</a></li>
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