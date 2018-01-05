import React,{Component} from 'react';

import '../style.css';
import '../Contact/Contact.css';
import './Media.css';
import axios from 'axios';
export default class Contact extends Component{
	    constructor(){
        super();
        this.state={
            events:[]
        }
    }
    componentWillMount(){
           axios.get(`http://198.12.154.44:3333/Puc/Events`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        events:res.data.response,
                       
                    })
             })
    }
    render(){


		 let events="";
        if(this.state.events.length>0){
            events=this.state.events.map((item,index)=>{
                if(index<2){
                    var month=new Date(item.eventdate).toDateString().split(" ")[1];
                     var day=new Date(item.eventdate).toDateString().split(" ")[2];
					  var href=`/NewsSingle?id=${item.eventid}`;
                    return(
                  
								      <article className="events-item row page-row">                                    
											<div className="date-label-wrapper col-md-3 col-sm-4 col-xs-4">
												<p className="date-label">                          
													<span className="month">{month}</span>
													<span className="date-number">{day}</span>
												</p>
											</div>
											<div className="details col-md-9 col-sm-8 col-xs-8">
												<h5 className="title"><a href={href}>{item.eventname}</a></h5>  
												<p className="time text-muted">Soundarya PU College</p>                  
											</div> 
										</article>
              
                                 )
                          }
                     
                        else{
                            return (<div></div>)

                            }
                
             
                           
            })
        }



        return(
     <div className="container">
          <div className="page-wrapper">
                    <header className="page-heading clearfix">
                        <h1 className="heading-title pull-left">Media</h1>
                        <div className="breadcrumbs pull-right">
                            <ul className="breadcrumbs-list">
                                <li className="breadcrumbs-label">You are here:</li>
                                <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                <li><a href="/#/Gallery">media</a><i className="fa fa-angle-right"></i></li>
                            </ul>
                        </div>
                    </header> 
        <div className="page-content"> 
            <div className="row page-row">                            
                <div className="album-wraper col-md-8 col-sm-7"> 
                    <div className="row" style={{"margin":"0","padding":"0","border":"none"}}>
                     
			

				<div className="gallery_isotope_container full_width loaded scrolled" style={{"position":"relative","height":"604px"}}>

                            <div className="isotope_item travelling" style={{"width": "25%","position": "absolute", "left":"0px", "top":"0px"}}>


                                <div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0s"}}>

                                    <ul className="album">
                                        <li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153568/01-zoom_xglsbw.jpg" alt=""/></li>
                                    </ul>

                                
                                    <a className="overlay_link" href="javascript:;"></a>

                            

                                </div>

                            </div>

					<div className="isotope_item travelling" style={{"width": "25%", "position": "absolute","left": "198px", "top": "0px"}}>

						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.05s"}}>

						
							<ul className="album">
								<li className="" style={{"opacity":"0"}}><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153577/02-zoom_jxivi5.jpg" alt=""/></li>
                                </ul>
				
							<a className="overlay_link" href="javascript:;"></a>


						
                    	</div>

				
					</div>
                    <div className="isotope_item travelling" style={{"width":"25%","position":"absolute","left":"396px","top": "0px"}}>

					
						<div className="inner_j_item album_item item_type_1" style={{"transition-delay":"0.1s"}}>

							<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153583/03-zoom_yaevfw.jpg" alt=""/></li>
							</ul>
							<a className="overlay_link" href="javascript:;"></a>

				


						</div>


					</div><div className="isotope_item travelling" style={{"width": "25%","position": "absolute","left": "594px","top": "0px"}}>

					
						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.15s"}}>

					
							<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153590/04-zoom_zzvpxj.jpg" alt=""/></li>
						     </ul>
							<a className="overlay_link" href="javascript:;"></a>

						

						</div>

					</div>
                    <div className="isotope_item travelling" style={{"width": "25%", "position": "absolute", "left": "198px", "top": "149px"}}>

						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.2s"}}>

							<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153598/05-zoom_udm4s5.jpg" alt=""/></li>
						     </ul>
							<a className="overlay_link" href="javascript:;"></a>

							<div className="meta">

							</div>


						</div>

					</div>
                    <div className="isotope_item travelling" style={{"width": "25%", "position": "absolute","left": "396px", "top": "160px"}}>

						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.25s"}}>
                        	<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153604/06-zoom_xxn3ca.jpg" alt=""/></li>
						     </ul>
							<a className="overlay_link" href="javascript:;"></a>

							<div className="meta">

							</div>

					</div>

					</div>
                    <div className="isotope_item travelling" style={{"width":"25%","position":"absolute","left":"594px", "top": "181px"}}>
                  
                     	<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.3s"}}>

							<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153610/07-zoom_cpb0nc.jpg" alt=""/></li>
							 </ul>
							<a className="overlay_link" href="javascript:;"></a>

							<div className="meta">


							</div>

						</div>

					</div><div className="isotope_item travelling" style={{"width": "25%"," position": "absolute","left":"0px","top": "229px"}}>

						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.35s"}}>

							<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153615/08-zoom_otviyn.jpg" alt=""/></li>
							 </ul>
							<a className="overlay_link" href="javascript:;"></a>

							<div className="meta">


							</div>

						</div>

					</div><div className="isotope_item travelling" style={{"width": "25%", "position": "absolute", "left": "198px", "top": "279px"}}>

						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.4s"}}>

							<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153623/09-zoom_oe0xok.jpg" alt=""/></li>
						     </ul>
							<a className="overlay_link" href="javascript:;"></a>

							<div className="meta">

							</div>

						
						</div>


					</div>
                    <div className="isotope_item travelling" style={{"width": "25%","position":"absolute", "left": "396px",top: "299px"}}>

				
						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.45s"}}>

							<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153629/10-zoom_veax52.jpg" alt=""/>
                                </li>
                       
							</ul>


							<a className="overlay_link" href="javascript:;"></a>
							<div className="meta">

							</div>

						</div>

					</div><div className="isotope_item travelling" style={{"width":"25%", "position": "absolute", "left": "594px", "top": "363px"}}>

						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.5s"}}>

							<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153636/11-zoom_wiiqgr.jpg" alt=""/></li>
							</ul>

							<a className="overlay_link" href="javascript:;"></a>

							<div className="meta">


							</div>

						</div>

					
					</div><div className="isotope_item travelling" style={{"width": "25%" ,"position": "absolute", "left": "0px", "top": "443px"}}>


						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.55s"}}>

							
							<ul className="album">
								<li className="active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506153643/12-zoom_e3vezv.jpg" alt=""/></li>
																							</ul>
						

							<a className="overlay_link" href="javascript:;"></a>

						


							<div className="meta">

							

							</div>

							

						</div>

						
					</div><div className="isotope_item travelling" style={{"width": "25%", "position": "absolute", "left": "396px","top": "443px"}}>


						<div className="inner_j_item album_item item_type_1" style={{"transition-delay": "0.6s"}}>

						

						


							<a className="overlay_link" href="javascript:;"></a>

							


							<div className="meta">

								


								

							</div>


						</div>

					
					</div>
				</div>


                    </div>
                </div>
                
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">   
                    

                <section className="widget has-divider">
                    <h3 className="title">Latest Events</h3>
                       {events}
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