import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Assessment extends Component{
    render(){
        return(
          <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Assessment Plan</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Assessment Plan</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                                                     
                            <p><img className="img-responsive" src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506151213/class_wx7gpd.jpg" alt=""/></p>
                            <h3 className="title sub-heading">Discipline</h3>
                            <p style={{"text-align":"justify"}}>Student Discipline is a way of life at the Indian Academy Educational Institutions. We believe the aim of Discipline is to prepare our students to be useful and important citizens of their countries, useful members of their societies and eminent leaders of industry and business. Several measures are implemented to achieve this aim.</p>
                            <h3 className="title sub-heading">Faculty Mentorship</h3>
                            <p style={{"text-align":"justify"}}>A faculty member is assigned for each student as Mentor. He acts as de facto local guardian for the student and guides and helps him in all phases of his student life throughout his stay at the institution. The Mentor is also in touch with the parents and gives regular feedback to them.</p>
                           <h3 className="title sub-heading">Attendance: </h3>
                            <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> Attendance in classNamees as per university norms is strictly enforced and is a prerequisite for appearing for university exams.</li>
                                <li><i className="fa fa-hand-o-right"></i> Leaves are granted for valid reasons only.</li>                              
                                <li><i className="fa fa-hand-o-right"></i> As per the <strong>Pre-University Education Board norms, NO </strong>student will be permitted to take the Examination if he/she has less than 75% attendance. <strong>Hence, attending classNamees is compulsory.</strong> An Undertaking to this effect shall be signed during admission to the College by both the student and his/her parent.</li>                              
                           </ul>
                           <h3 className="title sub-heading">Campus Norms</h3>
                            <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> Students are not expected to go out of campus during their className hours</li>
                                <li><i className="fa fa-hand-o-right"></i> Students are allowed out at lunch time only.</li>                              
                                <li><i className="fa fa-hand-o-right"></i> Ragging and any other indiscipline is strictly prohibited in the campus.</li>                              
                                <li><i className="fa fa-hand-o-right"></i> The use of Mobile phone is Prohibited in the Campus. Strict disciplinary action will be initiated if violated.</li>                              
                                <li><i className="fa fa-hand-o-right"></i> On admission to the college an identification card will be issued to each student. The student will preserve this card carefully and produce it at the time of verification while borrowing books from library, to get Certificates, Marks Cards &amp; at the time of examination.</li>                              
                           </ul>
                           <h3 className="title sub-heading">Academic Assignments, Tests and Term Examinations</h3>
                           <p style={{"text-align":"justify"}}>Pre-University academic sessions start as per schedule, exams are conducted as per timetable and results are announced in time. In addition, monthly internal exams are also conducted as per schedule drawn up at the beginning of the session.</p>                          


                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                                                        <section className="widget has-divider">
                                                            <h3 className="title">Related Links</h3>
                                                            <ul className="job-list custom-list-style" style={{"list-style":"none"}}>
                                                                <li><i className="fa fa-caret-right"></i><a href="/#/Course">Courses Offered</a></li>
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
                                                    </aside>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        )
    }
}