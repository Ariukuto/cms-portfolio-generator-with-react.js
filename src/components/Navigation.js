import React from 'react';
import { Image } from './Image';
import {NewImage} from './NewImage.js';

/**
 * @name Navigation
 * @description React Komponent
 */
export class Navigation extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        let config = props.config;
        this.state = {
            'fullwith': config.fullwith,
            'logo': config.logo,
            'backgroundcolor': config.backgroundcolor,
            'links': config.links,
        }
    }

    render() {
        let style = {backgroundColor: this.state.backgroundcolor};
        let layout = this.state.fullwith === true ? 'container-fluid': 'container';
        let links = this.state.links;
        return(
            <div className='Navigation' style={style}>
                <div className={`navbar navbar-expand-lg navbar-light ${layout}`}> 
    
                        {/* logo */}
                        <a className="logo" href="#">
                            {this.state.logo !== "" ? <NewImage data={this.state.logo}/> : 'LOGO' }
                        </a>
    
                        {/* mobile burger menu */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
    
                        {/* navigation */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav">
                                {/* Loop */}
                                {links.map((link, index) => {
                                    return (
                                        <div key={index} className="nav-item">
                                            <a  className="nav-link" aria-current="page" title={link.title || ''} href={link.url} target="_blank">
                                                {link.name}
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
    
                    
                </div>
            </div> 
        )
    }
    
}
