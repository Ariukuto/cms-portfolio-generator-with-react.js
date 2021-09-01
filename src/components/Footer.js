import React from 'react';
import emitter from "../ev"
import config from '../config/footer.config.json';

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

    renderHeadline(col) {
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

        // Event Callback Funktion
        const showWindow = (link) => {
            return () => {
                // show_window Event auslösen
                emitter.emit("show_window", {
                    title: link.title,
                    component: link.component,
                });
            }
        }

        return (
            <div className={`Footer ${layout}`} style={footerstyle}>
                <div className='row'>
                    {this.state.columns.map((col, i) => {
                        return (
                            <div key={i} className="col-sm d-flex justify-content-center">
                               {this.renderHeadline(col)}
                                {col.links.map((link, j) => {
                                    return(
                                        <div key={j} onClick={showWindow(link)} style={linkstyle} className="link-title"> 
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