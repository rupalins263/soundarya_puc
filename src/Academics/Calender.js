import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Calender extends Component{

    on_click(events,id){
          var elmt;
          var b=events.toString();
         
       if(b=="Jan")
      {
            elmt=document.getElementById("Jan");
      }
      else if(b=="Feb")
      {
            elmt=document.getElementById("Feb");
      }
      else{
           elmt=document.getElementById("Dec");
      }
      
      console.log(elmt);
       var allemlnt=document.getElementsByClassName("conti");

      for(var i=0;i<allemlnt.length;i++)
      {
         allemlnt[i].style.display="none";
      }

      elmt.style.display="block";
         

      
   

    }
    render(){
        return(
         <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Events</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Events</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
				<article className="welcome col-md-8 col-sm-7">
							<div className="jtab-wrapper"><ul className="jtab-trigger jtab-ul">
							    <li>
							       <a  onClick={this.on_click.bind(this,"Feb")} className=" tabu">Feb Events</a>
							    </li>
							    <li>
							           <a   onClick={this.on_click.bind(this,"Jan")} className="tabu">Jan Events</a>
							    </li>
							    <li>
							        <a onClick={this.on_click.bind(this,"Dec")} className="tabu">Dec Events</a>
							    </li>						  
							</ul></div>
							<div className="jtab-content-list">
							    <div id="Feb" className="jtab-content jtab-selected conti" style={{"display": "block"}}>						        
							        <article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">FEB</span>
												<span className="date-number">11</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Teacher Training Workshop</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">FEB</span>
												<span className="date-number">13</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Sarojini Naidu Birth Day</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">FEB</span>
												<span className="date-number">14</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Submission of FA 4 Activities</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">FEB</span>
												<span className="date-number">28</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">National Science Day</h3>                     
										</div>
									</article>
							    </div>
							    <div id="Jan" className="jtab-content conti" style={{"display": "none"}}>							        
							        <article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">JAN</span>
												<span className="date-number">02</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">New Year Celebration</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">JAN</span>
												<span className="date-number">11</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">National youth day-Special Assembly</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">JAN</span>
												<span className="date-number">12</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">School Picnic: Grade 1 to 9</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">JAN</span>
												<span className="date-number">13</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Kite Festival</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">JAN</span>
												<span className="date-number">26</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Republic Day Celebration</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">JAN</span>
												<span className="date-number">30</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Special Assembly on Martyr's day</h3>                     
										</div>
									</article>
							    </div>							   
							    <div id="Dec" className="jtab-content conti" style={{"display": "none"}}>
							        <article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">DEC</span>
												<span className="date-number">03</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Special Assembly on Indian Navy</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">DEC</span>
												<span className="date-number">05-10</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">FA 3 - Paper pen test</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">DEC</span>
												<span className="date-number">13</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">IMO Exam</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">DEC</span>
												<span className="date-number">14</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">National Energy Conservation Day</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">DEC</span>
												<span className="date-number">15-22</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Ganith Week</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">DEC</span>
												<span className="date-number">24-25</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Christmas Holiday</h3>                     
										</div>
									</article>
									
									<article className="events-item page-row has-divider clearfix">
										<div className="date-label-wrapper col-md-1 col-sm-2">
											<p className="date-label">
												<span className="month">DEC</span>
												<span className="date-number">29-30</span>
											</p>
										</div>
										<div className="details col-md-11 col-sm-10">
											<h3 className="title">Excursion : Grade 6 to 9</h3>                     
										</div>
									</article>
							    </div>
							</div>
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