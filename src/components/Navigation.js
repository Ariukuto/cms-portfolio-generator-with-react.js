
import React from 'react';
import {NewImage} from './NewImage.js';
/**
 * @name Navigation
 * @description React Komponent
 */
export class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'fullwith': props.config.fullwith || '',
            'overBanner': props.config.overBanner || '',
            "navbarAlign": props.config.navbarAlign || '',
            'logo': props.config.logo || '',
            'backgroundcolor': props.config.backgroundcolor || '',
            'links': props.config.links || ''   ,
        }
    }

    getNavbarAlign = () => {
        switch (this.state.navbarAlign) {
            case "center":
                return "center";
            case "right": 
                return "flex-end";
            default:
                return "flex-start"; 
        }
    }

    render() {
        let style = {backgroundColor: this.state.backgroundcolor};
        let overBanner = (this.state.overBanner ? 'absolute' : '');
        let layout = this.state.fullwith === true ? 'container-fluid': 'container';
        let links = this.state.links;
        
        return(
            <div className={`Ǹavigation ${overBanner}`} style={style}>
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
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent: this.getNavbarAlign()}}>
                        <div className="navbar-nav">
                            {/* Loop */}
                            {links.map((link, index) => {
                                return (
                                    <div key={index} className="nav-item">
                                        <a  className="nav-link" aria-current="page" title={link.title || ''} href={link.url || ""} target="_blank" rel="noreferrer">
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
