import React,{Component} from 'react';
import './Contact.css';

export default class Carrier extends Component{
    render(){
        return(
        <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Downloads</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Downloads</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">    
                    <div className="row page-row"> 
						<article className="col-md-8 col-sm-7">                                                     
                            <table>
								<thead>
									<tr><th>Filename</th>
									<th>Download Link</th>
								</tr></thead>
                                <tbody className="table table-responsive table-bordered table-striped table-condensed">
                                    <tr>
                                        <td>College Application </td>
                                        <td><a href="http://zenopsys.net/soundarya_forms/puc/sims-pu-application-form.pdf"><i className="fa fa-file-pdf-o"></i> Download PDF</a></td>
                                    </tr>
                                    <tr>
                                
                                        <td>Prospectus</td>
                                        <td><a href="http://zenopsys.net/soundarya_forms/puc/soundarya-pu-prospectus.pdf"><i className="fa fa-file-pdf-o"></i> Download PDF</a></td>
                                    </tr>
									<tr>
                                        <td>VENTURA 2016-17</td>
                                        <td><a href="https://drive.google.com/file/d/0B7VD508EH2A0SjRVTzluYjBkQzg/view?usp=sharing"><i className="fa fa-file-pdf-o"></i> Download PDF</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}