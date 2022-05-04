import React from 'react';
import emitter from "../ev"
import config from '../config/footer.config.json';
import { openWindow } from './Window';


/**
 * @name Footer
 * @description Footer React Component
 * @props config : {}
 */
export class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'backgroundcolor': config.backgroundcolor,
            'headlinecolor': config.headlinecolor,
            'fontcolor': config.fontcolor,
            'columns': config.columns,
            'fullwith': config.fullwith,
        }
    }

    FooterHeadline(col) {
        if(!col.headline) 
            return '';
        
        let headlinestyle = {color:this.state.headlinecolor}
        return (
            <h6 style={headlinestyle} >
                {col.headline} 
            </h6>
        )
    }

    render() {
        let layout = this.fullwith !== "true" ? 'container-fluid': 'container';
        let footerstyle = {backgroundColor: this.state.backgroundcolor};
        let linkstyle = {
            color: this.state.fontcolor, 
        };

        return (
            <div className={`Footer ${layout}`} style={footerstyle}>
                <div className='row'>
                    {this.state.columns.map((col, i) => {
                        return (
                            <div key={i} className="col-sm d-flex justify-content-center">
                               {this.FooterHeadline(col)}
                                {col.links.map((link, j) => {
                                    return(
                                        <div key={j} onClick={openWindow(link)} style={linkstyle} className="link-title"> 
                                            {link.title}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}    
                </div>
            </div>
        );
    }
}