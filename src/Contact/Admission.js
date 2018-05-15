import React,{Component} from 'react';
import './Contact.css';
import ReactPixel from 'react-facebook-pixel';
import axios from 'axios';
export default class Admission extends Component{

      componentWillMount(){
        ReactPixel.init('157395081538454');
    }

       submit(event)
    {
         ReactPixel.track('track', 'Lead')
        event.preventDefault();
       var name= document.getElementById("name");
        var phone= document.getElementById("phone");
         var email= document.getElementById("email");

         var message= document.getElementById("message");
          axios.post('http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/Puc/ContactUs', {
                "name":name.value,
                "email":email.value,
                "number":phone.value,
                "message":message.value
            })
                .then(function (response) {
                    alert("Successfully submitted")
                    window.location=window.location
                })
                .catch(function (error) {
                   alert("Retry again")
                });
           
    }
    render(){
        return(
    
        <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Admission @ Soundarya Pre-University College</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Admissions</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                                                                                
                            <p>Soundarya Pre-University College Admission Unit facilitates the admission process of the prospective students by offering them required counseling and guidance to help them to select the right course for bright and right students. The selection processes for the academic year generally begins in the first week of May. Once the students are here, they discover that exploration, challenge and curiosities are not limited to their desires!</p>  
							
                          <h3 className="title sub-heading">For admissions contact:</h3>  
						  
                            <form onSubmit={this.submit.bind(this)}>
                            <div className="form-group name">
                                <label for="name">Name<sup>*</sup></label>
                                <input id="name" type="text" className="form-control req_field" placeholder="Enter your name" required/>
                            </div>
                            <div className="form-group sex">
                                <label for="name">Sex<sup>*</sup></label>
                                <input id="gender" type="text" className="form-control req_field" placeholder="Enter your Gender" required/>
                            </div>
                            <div className="form-group email">
                                <label for="email">Email <span className="required">*</span></label>
                                <input id="email" type="email" className="form-control req_field req_field_email" placeholder="Enter your email" required/>
                            </div>
                            
                            <div className="form-group phone">
                                <label for="phone">Phone<sup>*</sup></label>
                                <input id="phone" type="tel" className="form-control" placeholder="Enter your contact number" required/>
                            </div>
                            <div className="form-group country">
                                <label for="phone">Country<sup>*</sup></label>
                                <input id="phone" type="tel" className="form-control" placeholder="Enter your Country Name" required  />
                            </div>
                            <div className="form-group course">
                                <label for="phone">Course<sup>*</sup></label>
                                <input id="phone" type="tel" className="form-control" placeholder="Enter your Desired Course" required/>
                            </div>
                            <div className="form-group message">
                                <label for="message">Ask your Admission Related Quires<span className="required">*</span></label>
                                <textarea id="message" className="form-control req_field" rows="4" placeholder="Enter your message here..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-theme" onclick="submit_form('contact-form');">Submit</button>
                            <button  style={{marginLeft:30}}type="reset" className="btn btn-theme">Reset</button>
                        </form>
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">  
                                     <section className="widget has-divider">
                                        <h3 className="title">Downloads</h3>
                                        <p>For your benefit we have compiled in this section some of the key features you should know about Soundarya PU College.</p>
                                        <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/puc/soundarya-pu-prospectus.pdf"><i className="fa fa-download"></i>Prospectus</a></p>
                                        <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/puc/sims-pu-application-form.pdf"><i className="fa fa-download"></i>Application Form</a></p>
                                    </section>  
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
									<li><i className="fa fa-caret-right"></i><a href="/#/Coarse">Courses Offered</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/#/Infra">Infrastructure</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/#/Faculty">Faculty </a></li>
                                </ul>
                                
                            </section>
                            <section className="widget">
                                <h3 className="title">Contact</h3>
                                <p><b>Soundarya PU College</b><br/> Havanoor Extension,<br/> Hesaraghatta Main Road,<br/> Nagasandra Post, Near 8th Mile,<br/> Bangalore-560073</p>
                                <p className="tel"><i className="fa fa-phone"></i>Tel: 080-28390024</p>
                                <p className="email"><i className="fa fa-envelope"></i>Email: <a href="#">soundaryapucollege@gmail.com</a></p>
                            </section>
                                                        <section className="widget">
                                <h3 className="title">College Timings</h3>
                                <p><b>Commerce:</b> 8.30 AM - 2.00 PM</p>
                                <p><b>Science &amp; CEBA:</b> 8.30 AM - 4.00 PM</p>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
            </div>
             )
            }
            }