import React,{Component} from 'react';
import './Home.css';
export  default class News extends Component{
    render(){
        return(
            <section className="container news">
                <div>
                <h1 className="line">What's New</h1>
                </div>
                <div className="col-md-4 news-item">
                        <h2 className="title">Soundarya School Toppers 2017</h2>

                        <img className="thumb" src="http://school.soundaryainstitutions.in/assets/images/news/news-thumb.png" alt="high-schools-Laggere"/>
                         <p></p>
                         <div>SSLC Results 2017</div>
                         <div>
                             <br/>
                             </div>
                             <div>
                                 <span>
                                  {/*<a className="read-more" href="">
                                    Read more
                                    <i className="fa fa-chevron-right"></i></a>                */}
                                </span>
                             </div>
                </div>
            </section>
        )
    }
}