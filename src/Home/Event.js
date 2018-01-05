import React,{Component} from 'react';
import './Home.css';
import axios from 'axios';
export default class Event extends Component{
    constructor(){
        super();
        this.state={
            events:[]
        }
    }
    componentWillMount(){
           axios.get(`http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/Puc/Events`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        events:res.data.response,
                       
                    })
             })
    }
    render()
    {
        let events="";
        if(this.state.events.length>0){
            events=this.state.events.map((item,index)=>{
                if(index<2){
                    var month=new Date(item.eventdate).toDateString().split(" ")[1];
                     var day=new Date(item.eventdate).toDateString().split(" ")[2];
                      var href=`/NewsSingle?id=${item.eventid}`;
                    return(
                        <div className="event-item">
                                        <p className="date-label">
                                            <span className="month">{month}</span>
                                            <span className="date-number">{day}</span>
                                        </p>
                                        <div className="details">
                                            <h2 className="title">
                                                <a href={href}>{item.eventname}</a>
                                            </h2>
                                            <p className="location"><i className="fa fa-map-marker"></i>Soundarya PU College</p>                            
                                        </div>
                                </div>
              
                                 )
                          }
                     
                        else{
                            return (<div></div>)

                            }
                
             
                           
            })
        }
        return(
            <div className="container">
              <div className="row cols-wrapper">
                <div className="col-md-3">
                    <iframe width="100%" height="150" src="https://www.youtube.com/embed/ne0t1wWnl80" frameborder="0" allowfullscreen="" style={{"margin-bottom":"10px"}}></iframe>
                
					
					
                    <section className="home-page-section">
                        <h1 className="section-heading text-highlight"><span className="line">Events</span></h1>
                        <div className="section-content">
                                 {events}
                            <a className="read-more" href="/News">All events<i className="fa fa-chevron-right"></i></a>
                        </div>
                    </section>
                </div>
                <div className="col-md-5">
                    <blockquote className="custom-quote" style={{"width":"100%"}}>
						<p style={{"text-align":"justify"}}><i className="fa fa-quote-left"></i> Welcome to Soundarya Pre-university College, Soundarya Educational Trust (SET) was established in the year 1995 with clear vision and mission by Soundarya P Manjappa. It is an institution with <b>‘one source with many resources’</b>. We have internationally acclaimed teaching and research faculty who thrives to instil the intellectual and moral values for all round development of the students in the competitive world. The curriculum of our college is a blend of academics with co-curricular and extracurricular activities to shape an individual into responsible citizen. Drive for development is a continuous process at Soundarya</p>          
                    </blockquote>  
					
					<h1 className="section-heading text-highlight"><span className="line">Photo Gallery</span></h1>
					<div className="section-content">
						<div className="row">
							<div className="col-md-4">
								<img className="img-1" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506157853/11_u0prq2.jpg" alt="commerece-college-nagasandra"/>
							</div>
							<div className="col-md-4">
								<img  className="img-1" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506157878/33_w3ehdu.jpg" alt="top-puc-college-peenya"/>
							</div>
							<div className="col-md-4">
								<img  className="img-1" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506157910/22_u1qeo4.jpg" alt="top-pu-college"/>
							</div>
							<br style={{"clear":"both"}}/>
							<br style={{"clear":"both"}}/>
							<div className="col-md-6">
								<a className="read-more" href="/Gallery">View All<i className="fa fa-chevron-right"></i></a>
							</div>
						</div>
					</div>
 
                </div>
                <div className="col-md-4">
                    <section className="links">
                     
                     
                        
                        <div className="widget facebooklikebox-2 widget_FacebookLikeBox" style={{"padding-top":"0px"}}>
                        <script type="text/javascript" src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script>
                        <span style={{"vertical-align": "bottom", "width":"100%","height": "460px"}}>
                        <iframe style={{"visibility": "visible","width":"100%", height: "460px"}} title="fb:like_box Facebook Social Plugin" name="f32edf47a343e32" src="http://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D28%23cb%3Df2dcaef3d4633f%26domain%3Dwww.soundaryainstitutions.in%26origin%3Dhttp%253A%252F%252Fwww.soundaryainstitutions.in%252Ff37e2d61b1b2702%26relation%3Dparent.parent&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2FSoundaryaPuc%2F&amp;locale=en_US&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=360" height="450" width="100%" frameborder="0" scrolling="no"></iframe></span></div>                        
                
                        <div className="fb-page" data-href="https://www.facebook.com/Soundarya-Central-School-1441884222795577" data-tabs="timeline" data-small-header="false" data-height="470" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
                     

                    </section>
                </div>
            </div>
         </div>
        )
    }
}

