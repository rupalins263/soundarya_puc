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
      this.getalbums=this.getalbums.bind(this);
       this.goBack=this.goBack.bind(this);
    }
    componentDidMount(){
        axios.get("http://198.12.154.44:3333/PUC/Albums")
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        albums:res.data.response
                    })
             })
    }
    goBack(){
        this.setState({
            flag:false,
            album:[]
        })
    }
    getalbums(id){
              axios.get(`http://198.12.154.44:3333/PUC/Image/${id}`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        album:res.data.response,
                        flag:true
                    })
             }) 
    }
    render(){
        let val="";
       if(this.state.flag===false)
       {
        if(this.state.albums.length>0)
        {
            var aval=this.state.albums.map((item,index)=>{
                if(item.albumname==="Slider"||item.albumname==="slider")
                {
                    return "";
                }
                return (
                     <div key={index} className="col-md-3 col-sm-3 col-xs-12 text-center" style={{cursor:"pointer"}} onClick={()=>{this.getalbums(item.albumid)}}>
                                <div className="album-cover">
                           
                                        
                                        <img className="img-responsive" src={item.album_url||"http://res.cloudinary.com/dvl9i5pry/image/upload/v1505979469/gallery-default_eplxgr.jpg"} alt=""/>
                                    
                                    <div className="desc">
                                        <h4><small>{item.albumname}</small></h4>
                                        <p>{item.album_description} </p>
                                    </div>
                                </div>
                         </div>
                )
               
            })
             val=(<div id="album">{aval}</div>)
         }
       } 
        else if(this.state.flag===true){
            
           var  image=this.state.album.map((item,index)=>{
                return (
                     <div key={index} className="col-md-3 col-sm-3 col-xs-12 text-center">
                                <div className="album-cover">
                                   
                                        
                                        <img  className="img-responsivewe" src={item.image_url} alt=""/>
                                    
                                </div>
                         </div>
                )
            })
            val =(<div> <h1 style={{marginBottom:50}}> All Images of the Album </h1>
                          <p><button onClick={this.goBack} className="btn btn-danger">Go Back</button></p>{image}</div>)
        }

        return(
            <div className="container" style={{marginTop:20}}>
                   {val}    
            </div>
        )
    }
}