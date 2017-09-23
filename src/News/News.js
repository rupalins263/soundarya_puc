import React,{Component} from 'react';
import '../Contact/Contact.css';
import '../Campus/Infra.css';
import axios from 'axios';
export default class Cafeteria extends Component
{
    constructor(){
        super();
        this.state={
            val:"",
             events:[]
        }
    }
        
    
    componentDidMount(){
           axios.get(`http://198.12.154.44:3333/PUC/Events`)
             .then((res)=>{
                    console.log(res)
                let events=res.data.response.map((item,index)=>{
                
                                var month=new Date(item.eventdate).toDateString().split(" ")[1];
                                var day=new Date(item.eventdate).toDateString().split(" ")[2];
                                 var b= `<article class="events-item row page-row">                                    
                                            <div className="date-label-wrapper col-md-3 col-sm-4 col-xs-4">
                                                <p className="date-label">                          
                                                    <span class="month">${month}</span>
                                                    <span class="date-number"> ${day}</span>
                                                </p>
                                            </div>
                                            <div class="details col-md-9 col-sm-8 col-xs-8">
                                                <h5 class="title">${item.eventname}</h5>  
                                                <p class="time text-muted">Soundarya PU College</p>                  
                                            </div>
                                 </article>`;
                            return b;
                
                         })
                        if(document.getElementById("events"))
                        {
                            document.getElementById("events").innerHTML=events;
                        }

                     })
            
             }
    componentWillMount(){
       if(window.location.pathname=="/News")
        {
             this.setState({
                 val:(
                <div className="page-content">
                    <div className="row page-row">
                        <div className="news-wrapper col-md-8 col-sm-7">
                            <article className="news-item page-row has-divider clearfix row">       
                                <figure className="thumb col-md-2 col-sm-3 col-xs-4">
                                        <img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153330/5_1_10_x_15_-_03_hfhc6t.jpg" alt=""/>
                                </figure>
                                <div className="details col-md-10 col-sm-9 col-xs-8">
                                    <h3 className="title"><a href="News/1">Achievers - 2016-17</a></h3>
                                    <p>Students scored 90% and above.....Subject wise marks....</p><div>Congratulations to our Top Performers</div><p></p>
                                    <a className="btn btn-theme read-more" href="/News/1">Read more<i className="fa fa-chevron-right"></i></a>
                                </div>
                            </article>
                            <article className="news-item page-row has-divider clearfix row">       
                                <figure className="thumb col-md-2 col-sm-3 col-xs-4">
                                        <img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1505979508/news-thumb_uqpsxz.png" alt=""/>
                                </figure>
                                <div className="details col-md-10 col-sm-9 col-xs-8">
                                    <h3 className="title"><a href="/News/2">College Re open for 2nd PU on 15th May</a></h3>
                                    <p></p>
                                    <a className="btn btn-theme read-more" href="/News/2">Read more<i className="fa fa-chevron-right"></i></a>
                                </div>
                            </article>
                            <article className="news-item page-row has-divider clearfix row">       
                                <figure className="thumb col-md-2 col-sm-3 col-xs-4">
                                        <img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1505979508/news-thumb_uqpsxz.png" alt=""/>
                                </figure>
                                <div className="details col-md-10 col-sm-9 col-xs-8">
                                    <h3 className="title"><a href="/News/3">Soundarya PU Toppers</a></h3>
                                    <p>Congratulations to our Top Performers!<br/><br/>We wish them the best for their future.</p><div><br/></div><div><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153369/puc-toppers1_e2cpxz.jpg"/><br/></div><p></p>
                                    <a className="btn btn-theme read-more" href="/News/3">Read more<i className="fa fa-chevron-right"></i></a>
                                </div>
                            </article>
                            
                        </div>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1" id="three">  
                            

                                <section className="widget has-divider">
                                    <h3 className="title">Latest Events</h3>
                                    <div  id="events">
                                        
                                        </div>
                                        </section>                                          
                                        </aside>
                                    </div>
                                </div>
                         

                        )
                 
                 
             });
        }
        else if(window.location.pathname=="/News/1")
        {
            this.setState({
                val:(<div className="page-content">
                    <div className="row page-row">                         
                      
                        <div className="jobs-wrapper col-md-8 col-sm-7">
                            
                            <h3 className="title">Achievers - 2016-17</h3> 
                               
							
								<img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153279/5_1_10_x_15_-_03_g6atht.jpg" style={{"max-width":"100%"}}/>
							
                            <p>Students scored 90% and above.....Subject wise marks....</p><div>Congratulations to our Top Performers</div><p></p>
                            
                        </div>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">      
                            <section className="widget has-divider">
                                <h3 className="title">Other Events</h3>
                                <ul className="job-list custom-list-style">
                                            <li><i className="fa fa-caret-right"></i><a href="/News/2">College Re open for 2nd PU on 15th May</a></li>                                                                                      
                                            <li><i className="fa fa-caret-right"></i><a href="/News/3">Soundarya PU Toppers</a></li>                                                                                      
                                </ul>
                            </section>
                                                                   
                        </aside>
                    </div>
                </div>
                )
            })
        }
        else if(window.location.pathname=="/News/2")
        {
            this.setState({
                val:(
                 <div className="page-content">
                    <div className="row page-row">                         
                      
                        <div className="jobs-wrapper col-md-8 col-sm-7">
                            
                            <h3 className="title">College Re open for 2nd PU on 15th May</h3> 
                               
							
							
                            <p></p>
                            
                        </div>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">      
                            <section className="widget has-divider">
                                <h3 className="title">Other Events</h3>
                                <ul className="job-list custom-list-style">
                                            <li><i className="fa fa-caret-right"></i><a href="/News/1">Achievers - 2016-17</a></li>                                                                                      
                                            <li><i className="fa fa-caret-right"></i><a href="/News/3">Soundarya PU Toppers</a></li>                                                                                      
                                </ul>
                            </section> 
                                                                   
                        </aside>
                    </div>
                </div>
                )
            })
        }
        else if(window.location.pathname=="/News/3"){
            this.setState(
                {
                    val:(
                    <div className="page-content">
                     <div className="row page-row">                         
                      
                        <div className="jobs-wrapper col-md-8 col-sm-7">
                            
                            <h3 className="title">Soundarya PU Toppers</h3> 
                               
							
							
                            <p>Congratulations to our Top Performers!<br/><br/>We wish them the best for their future.</p><div><br/></div><div><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153369/puc-toppers1_e2cpxz.jpg"/><br/></div><p></p>
                            
                        </div>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">      
                            <section className="widget has-divider">
                                <h3 className="title">Other Events</h3>
                                <ul className="job-list custom-list-style">
                                            <li><i className="fa fa-caret-right"></i><a href="/News/1">Achievers - 2016-17</a></li>                                                                                      
                                            <li><i className="fa fa-caret-right"></i><a href="/News/2">College Re open for 2nd PU on 15th May</a></li>                                                                                      
                                </ul>
                            </section>
                                                                   
                        </aside>
                    </div>
                </div>
                )
                }
            )

        }
    }
     
    
    render()
    {
         let events="";
        if(this.state.events.length>0){
            events=this.state.events.map((item,index)=>{
                if(index<2){
                    var month=new Date(item.eventdate).toDateString().split(" ")[1];
                     var day=new Date(item.eventdate).toDateString().split(" ")[2];
                    return(
                                    <article className="events-item row page-row">                                    
                                            <div className="date-label-wrapper col-md-3 col-sm-4 col-xs-4">
                                                <p className="date-label">                          
                                                    <span className="month">motnh</span>
                                                    <span className="date-number"> day</span>
                                                </p>
                                            </div>
                                            <div className="details col-md-9 col-sm-8 col-xs-8">
                                                <h5 className="title">Summer Camp 2017</h5>  
                                                <p className="time text-muted">Soundarya PU College</p>                  
                                            </div> 
                                        </article>
                    )
                }
            })
        }
        return(
            <div className="content container">
            <div className="page-wrapper">
                  <header className="page-heading clearfix">
                        <h1 className="heading-title pull-left">News</h1>
                        <div className="breadcrumbs pull-right">
                            <ul className="breadcrumbs-list">
                                <li className="breadcrumbs-label">You are here:</li>
                                <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                <li className="current">News</li>
                            </ul>
                        </div>
                    </header>
                {this.state.val}
            </div>
            </div>
        )
    }
    
        
}