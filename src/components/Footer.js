import React from 'react';
import emitter from "../ev"

/**
 * @name Footer
 * @description Footer React Component
 * @props config : {}
 */
export class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'backgroundcolor': props.config.backgroundcolor,
            'headlinecolor': props.config.headlinecolor,
            'fontcolor': props.config.fontcolor,
            'columns': props.config.columns,
            'fullwith': props.config.fullwith,
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
        let linkstyle = {color: this.state.fontcolor};

        // Event Callback Funktion
        const showWindow = (linkname) => {
            return () => {
                // show_window Event auslösen
                emitter.emit("show_window", {
                    title: linkname,
                    component: linkname,
                });
            }
        }

        return (
            <div className={`Footer ${layout}`} style={footerstyle}>
                <div className='row'>
                    {this.state.columns.map((col, i) => {
                        return (
                            <div key={i} className="col d-flex flex-column text-center">
                               {this.renderHeadline(col)}
                                {col.links.map((link, j) => {
                                    
                                    return(
                                        <div key={j} onClick={showWindow(link.name)} style={linkstyle} data-bs-toggle="modal" data-bs-target="#exampleModal"> 
                                            {link.name}
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