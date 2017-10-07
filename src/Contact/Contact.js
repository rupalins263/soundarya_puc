import React,{Component} from 'react';
import './Contact.css';
import axios from 'axios';
export default class ContactUs extends Component{


        submit(event)
    {
        event.preventDefault();
       var name= document.getElementById("name");
        var phone= document.getElementById("phone");
         var email= document.getElementById("email");

         var message= document.getElementById("message");
          axios.post('http://198.12.154.44:3333/Puc/ContactUs', {
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
    render()
    {
        return(
        <div>
            <div className="content container">
                <div className="page-wrapper">
                    <header className="page-heading clearfix">
                        <h1 className="heading-title pull-left">Contact</h1>
                        <div className="breadcrumbs pull-right">
                            <ul className="breadcrumbs-list">
                                <li className="breadcrumbs-label">You are here:</li>
                                <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                <li className="current">Contact Us</li>
                            </ul>
                        </div>
                    </header> 
            <div className="page-content">
                <div className="row">
                    <article className="contact-form col-md-8 col-sm-7  page-row">                            
                        <h3 className="title">Get in touch</h3>
                        
                        <p>We’d love to hear from you. Please fill in the form below and we will get in touch with you at the earliest.</p>
                        
                        <form  onSubmit={this.submit.bind(this)}>
                            <div className="form-group name">
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" className="form-control req_field" placeholder="Enter your name"/>
                            </div>
                            <div className="form-group email">
                                <label htmlFor="email">Email<span className="required">*</span></label>
                                <input id="email" type="email" className="form-control req_field req_field_email" placeholder="Enter your email"/>
                            </div>
                            
                            <div className="form-group phone">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" type="tel" className="form-control" placeholder="Enter your contact number"/>
                            </div>
                            <div className="form-group message">
                                <label htmlFor="message">Message<span className="required">*</span></label>
                                <textarea id="message" className="form-control req_field" rows="4" placeholder="Enter your message here..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-theme">Send message</button>
                        </form>       
                                <article className="map-section">
                                        <h3 className="title">Our Location</h3>
                                    <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.784697414076!2d77.50344431435447!3d13.049372216698773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cd26c119123%3A0x4441cb95053eb6bd!2sSoundarya+Composite+Pre-University+College!5e0!3m2!1sen!2sin!4v1454380714295" width="100%" height="315" frameborder="0" style={{"border":"0"}} allowfullscreen=""></iframe></div>
                                </article>      
                    </article>
                   
                
                    <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">
                        <section className="widget has-divider">
                                <h3 className="title">Downloads</h3>
                                <p>For your benefit we have compiled in this section some of the key features you should know about Soundarya School.</p>
                                 <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/puc/soundarya-pu-prospectus.pdf"><i className="fa fa-download"></i>Prospectus</a></p>
                                    <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/puc/sims-pu-application-form.pdf"><i className="fa fa-download"></i>Application Form</a></p>
                                
                              
                                      </section>
                        <section className="widget has-divider">
                            <h3 className="title">Postal Address</h3>
                            <p className="adr">
                                <span className="adr-group">       
                                    <span className="street-address"><b>Soundarya School</b></span><br/>
                                    <span className="region">Havanoor extension,</span><br/>
                                    <span className="postal-code">Nagasandra post,</span><br/>
                                    <span className="country-name">Bangalore-560073</span>
                                </span>
                            </p>
                        </section>    
                        
                        <section className="widget" style={{"font-size":"13px"}}>
                            <h3 className="title">All Enquiries</h3>
                            <p className="tel"><i className="fa fa-phone"></i>Tel: 080-28391789</p>
                            <p className="email"><i className="fa fa-envelope"></i>Email: <a href="#">soundaryaschool@gmail.com</a></p>
                            <p className="email"><i className="fa fa-envelope"></i>Email: <a href="#">soundarya.edu.trust@gmail.com </a></p>
                        </section>   

                        <section className="widget">
                            <h3 className="title">Our Institutions</h3>
                            <p><a href="#">Soundarya School</a></p>
                            <p><a href="http://puc.soundaryainstitutions.in">Soundarya Composite PU College</a></p>
                            <p><a href="http://sims.soundaryainstitutions.in">Soundarya Institute of Management &amp; Science</a></p>
                            <p><a href="http://central.soundaryainstitutions.in">Soundarya Central School (CBSE)</a></p>
                        </section>   

                    </aside>
                </div>
            </div>
        </div>
    </div>
 </div>
        )
    }
}