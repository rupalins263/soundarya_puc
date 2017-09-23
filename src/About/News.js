import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Mission extends Component{
    render(){
        
        return(

               <div className="content container">
                    <div className="page-wrapper">
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left"> News</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">News</li>
                                        </ul>
                                    </div>
                                </header> 
                                 <div className="page-content">
                                        <div className="row page-row">
                                            <div className="news-wrapper col-md-8 col-sm-7">
                                                <article className="news-item page-row has-divider clearfix row">       
                                                    <figure className="thumb col-md-2 col-sm-3 col-xs-4">
                                                            <img className="img-responsive" src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1505979508/news-thumb_uqpsxz.png" alt=""/>
                                                    </figure>
                                                    <div className="details col-md-10 col-sm-9 col-xs-8">
                                                        <h3 className="title">Soundarya School Toppers 2017</h3>
                                                        <p></p><div>SSLC Results 2017</div>
                                                        <div><br/>
                                                        </div>
                                                        <div>
                                                            <span style={{"box-sizing": "border-box","border-style":"initial","border-color":"initial","border-image":"initial","outline-color":"initial","outline-style": "initial", "line-height": "18.5714px"," background-image": "initial","background-size":"initial","background-origin":"initial"," background-clip": "initial", "background-position": "initial","background-repeat":" initial"}}>&nbsp; &nbsp; <b>A+ &nbsp; 46 Students</b></span><b><br/></b></div>
                                                        <div><span style={{"box-sizing": "border-box","border-style":"initial","border-color":"initial","border-image":"initial","outline-color":"initial","outline-style": "initial", "line-height": "18.5714px"," background-image": "initial","background-size":"initial","background-origin":"initial"," background-clip": "initial", "background-position": "initial","background-repeat":" initial"}}><b>&nbsp; &nbsp; A &nbsp; &nbsp; &nbsp;50&nbsp;Students</b></span></div>
                                                        <div><span style={{"box-sizing": "border-box","border-style":"initial","border-color":"initial","border-image":"initial","outline-color":"initial","outline-style": "initial", "line-height": "18.5714px"," background-image": "initial","background-size":"initial","background-origin":"initial"," background-clip": "initial", "background-position": "initial","background-repeat":" initial"}}><b>&nbsp; &nbsp; B+ &nbsp; &nbsp;33 Students</b></span></div>
                                                        <div><span style={{"box-sizing": "border-box","border-style":"initial","border-color":"initial","border-image":"initial","outline-color":"initial","outline-style": "initial", "line-height": "18.5714px"," background-image": "initial","background-size":"initial","background-origin":"initial"," background-clip": "initial", "background-position": "initial","background-repeat":" initial"}}><b><br/></b></span></div>
                                                        <div><span style={{"box-sizing": "border-box","border-style":"initial","border-color":"initial","border-image":"initial","outline-color":"initial","outline-style": "initial", "line-height": "18.5714px"," background-image": "initial","background-size":"initial","background-origin":"initial"," background-clip": "initial", "background-position": "initial","background-repeat":" initial"}}><b><img src="http://school.soundaryainstitutions.in/news_images/toppers-17.jpg"/><br/></b></span></div><p></p>
                                                        <a id="read" onClick={()=>{document.getElementById("read").style.display="none"}} className="btn btn-theme read-more" >Read more<i className="fa fa-chevron-right"></i></a>
                                                    </div>
                                                </article>

                                        
                                             
                                                
                                            </div>
                                            <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">  
                                                

                                                         <section className="widget has-divider">
                                                                <h3 className="title">Latest Events</h3>
                                                                    <article className="events-item row page-row">                                    
                                                                        <div className="date-label-wrapper col-md-3 col-sm-4 col-xs-4">
                                                                            <p className="date-label">                          
                                                                                <span className="month">Apr</span>
                                                                                <span className="date-number"> 01</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="details col-md-9 col-sm-8 col-xs-8">
                                                                            <h5 className="title">Summer Camp 2017</h5>  
                                                                            <p className="time text-muted">Soundarya School</p>                  
                                                                        </div> 
                                                                    </article>
                                                         </section>                                         
                                            </aside>
                                        </div>
                                    </div>
                </div>
            </div>
        )
    }
}