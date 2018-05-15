import React,{Component} from 'react';
import './Gallery.css';
import axios from 'axios';
export default class Gallery extends Component{

    constructor(){
        super();
        this.state={
             albums:[],
             album:[],
             flag:false
        }
     
    }
   
   
    render(){
              

        return(

            <div className="container" style={{marginTop:20}}>
            <h1 className="section-heading text-highlight"><span className="line">Carrer Prospects </span></h1>
                <div id="album">
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/1.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/2.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/3.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/4.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/5.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/6.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/7.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/8.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/9.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/10.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/11.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/12.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/13.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/14.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/15.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/16.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/17.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/18.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/19.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/20.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/21.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/22.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/23.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/24.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/25.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/26.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/27.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/28.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/29.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/30.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/31.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/32.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/33.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>                   
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/35.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 text center" >
                        <div className="album-cover">
                            <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/puc/Career_Prospects/36.jpg" style={{height:300,width:"100%"}} alt=""/>
                        </div>
                    </div>


                   
                </div>
            </div>
        )
    }
}