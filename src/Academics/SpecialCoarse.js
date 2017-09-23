import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class SpecialCoarse  extends Component{
    render(){
        return(
            <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Special Courses</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="index.html">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Special Courses</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                                                    
                            <p><img className="img-responsive" src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506151516/banner-infra-struct_ev7kep.jpg" alt=""/></p>                            
                            <h2 classNameName="title sub-heading">CET Coaching</h2>
                            <p style={{"text-align":"justify"}}>Candidates seeking admission into Medical, Dental and Engineering courses in government and private colleges within Karnataka must take up this examination for free as well as payment seats allotted by Government of Karnataka.</p>                           
                            <p style={{"text-align":"justify"}}>Soundarya Composite PU College offers special coaching to its II PUC students to prepare them for Common Entrance Test (CET) of Karnataka. Re-inforcing classNamees are conducted by the faculty in Physics, Mathematics, Chemistry and Biology (all four CET subjects) to students seeking CET from our college. As part of the training each student will be made to solve CET Question Papers of the last 10 years. A daily assignment includes question papers exclusively set for this program on CET format. This program is very popular and this coaching program is benefiting many students.</p>                           
                            <p style={{"text-align":"justify"}}><strong>WE AT SOUNDARYA PLUS 2 INTEGRATED SEGMENT 0FFER THIS DUAL ADVANTAGE UNDER ONE ROOF.Merits of the Program is as:</strong></p>                           
                            <ul className="custom-list-style">
                                 <li><i className="fa fa-hand-o-right"></i> Saves the precious time which can be utilised for studies.</li>
                                 <li><i className="fa fa-hand-o-right"></i> Easy accessibility of teachers throughout the academic year.</li>                              
                                 <li><i className="fa fa-hand-o-right"></i> Same teacher handling both PU and CET classNamees make the comprehension easier.</li>                              
                                 <li><i className="fa fa-hand-o-right"></i> Both PU and CET coaching are concurrent and thus avoids confusion.</li>                              
                                 <li><i className="fa fa-hand-o-right"></i> Personal monitoring and motivation of students to achieve assured success.</li>                              
                                 <li><i className="fa fa-hand-o-right"></i> Single point learning Centre.</li>                              
                                 <li><i className="fa fa-hand-o-right"></i> Comprehensive reference materials for both descriptive and objective examinations.</li>                              
                                 <li><i className="fa fa-hand-o-right"></i> Students receive all-round training.</li>                                                               
                                 <li><i className="fa fa-hand-o-right"></i> Students will not need any other supplementary coaching.</li>                              
                            </ul>
                            <h2 className="title sub-heading">Value Added Programs</h2>                                                        
                            <p style={{"text-align":"justify"}}><strong>Student Mentor Program </strong><br/>Faculty members take up mentorship to assist students in setting and achieving goals. In this program, a group of students are assigned to a particular faculty for the entire academic year. The selected faculty in the mentor role advises students from time to time through periodical personal interactions. These interactions would enable students to receive valuable inputs and guidance from their respective mentors to shape their academic career and achieve their targets. On academic front, our students are performing exceedingly well in Board Examinations and University Examinations.</p>                                                                       
                            <p style={{"text-align":"justify"}}><strong>English Proficiency Program</strong><br/> Our species' most precious facility is communication. No one can be effective unless he/she develops powerful communication skills. Department of English at Soundarya Composite Pre-University College conducts special sessions on speaking, reading, writing and listening skills. This program is conducted through workshops such as Toast Masters Club, Wall Magazine writings,  and/or special classNamees to all students.</p>                                                                                                   
                            
                            <div className="clearfix"></div>                           
                       
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style" style={{listStyle:"none"}}>
                                        <li><i className="fa fa-caret-right"></i><a href="#">About</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="#">Mission </a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="#">Vision</a></li>
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