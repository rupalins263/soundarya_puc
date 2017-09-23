import React,{Component} from 'react';
import './Contact.css';

export default class Media extends Component{
    render(){
        return(
             <div className="content container">
                <div className="page-wrapper">
                    <header className="page-heading clearfix">
                        <h1 className="heading-title pull-left">Media</h1>
                        <div className="breadcrumbs pull-right">
                            <ul className="breadcrumbs-list">
                                <li className="breadcrumbs-label">You are here:</li>
                                <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                <li className="current">Media</li>
                            </ul>
                        </div>
                    </header> 
            <div className="page-content">
                <div className="row">
                    <article className="col-md-8 col-sm-7  contact-form  page-row">                            
                    
                    </article>

                   
                
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
                        <section className="widget">
                            <h3 className="title">Our Institutions</h3>
                            <p><a href="#">Soundarya School</a></p>
                            <p><a href="#">Soundarya Composite PU College</a></p>
                            <p><a href="#">Soundarya Institute of Management &amp; Science</a></p>
                            <p><a href="#">Soundarya Central School (CBSE)</a></p>
                        </section>   

                    </aside>
                </div>
                
            </div>
        </div>
    </div>
        )
    }
}