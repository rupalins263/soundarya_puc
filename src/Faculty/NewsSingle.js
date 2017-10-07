import React,{Component} from 'react';
import '../Contact/Contact.css';
import './News.css';
import axios from 'axios';
export default class NewsSingle extends Component{
         constructor(){
        super();
        this.state={
            events:[],
            currentEvent:{
                    date:"",
                    img:"",
                    Desc:""
            }
        }
    }
    componentWillMount(){
       
        if(window.location.search)
        {
            var _this=this;
             console.log(window.location.search.slice(-1))
           axios.get(`http://198.12.154.44:3333/PUC/Events`)
             .then((res)=>{
                    console.log(res)
                        var current={};
                        res.data.response.forEach(function(element) {
                           if(window.location.search.slice(-1)==element.eventid)
                           {
                                    _this.setState({
                                            currentEvent:element
                                        
                                        })
                             }
                        }
                            
                        )
                    // this.setState({
                    //     events:res.data.response,
                       
                    // })
             })
        }
    }
    render(){
        var year=new Date(this.state.currentEvent.eventdate).getFullYear();
        var month=new Date(this.state.currentEvent.eventdate).toDateString().split(" ")[1];
         var day=new Date(this.state.currentEvent.eventdate).toDateString().split(" ")[2];
        
        return(

            <div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">News</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li><a href="/News">News-Events</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Events</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">                         
                      
                        <div className="jobs-wrapper col-md-8 col-sm-7">
                            
                            <h3 className="title">{this.state.currentEvent.eventname}</h3> 
                               
							<div className="box box-border page-row">
                                    <ul className="list-unstyled">
											<li><strong>Date:</strong> {day + " " +month+" "+year }</li>
                                        <li><strong>Location:</strong> Soundarya Central School</li>
                                        <li><strong>Map link:</strong> 
											<a href="" target="blank">NA</a>
										</li>
                                    </ul>                                
                                </div>
							
                            <p></p><div></div><div><br/></div><div><span className="stylingNews"><img width="100%" src={this.state.currentEvent.event_url}/><b><br/></b></span></div><p></p>
                            
                        </div>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">      
                            {/*<section className="widget has-divider">
                                <h3 className="title">Other Events</h3>
                                <ul className="job-list custom-list-style">
                                </ul>
                            </section>   */}
                                                                   
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}