import React,{Component} from 'react';
import Home from './Home';
import News from './News';
import Event from './Event'
export  default class HomeIndex extends Component{
    render()
    {
        return(
            <div>
                      <Home/>
                 
                    <Event/>
             </div>
        )
    }
}