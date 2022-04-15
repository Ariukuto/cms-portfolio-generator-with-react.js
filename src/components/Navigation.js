import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { Image } from './Image';
import config from '../config/navigation.config.json'; 

/**
 * @name Navigation
 * @description React Komponent
 */
export class Navigation extends React.Component {

    constructor() {
        super();
        this.state = {
            'fullwith':         config.fullwith || '',
            'overBanner':       config.overBanner || '',
            "navbarAlign":      config.navbarAlign || '',
            'logo':             config.logo || '',
            'backgroundcolor':  config.backgroundcolor || '',
            'color':            config.color || '',
            'links':            config.links || '',
        }
    }

    getNavbarAlign = () => {
        switch (this.state.navbarAlign) {
            case "center":
                return "center";
            case "right" || "end": 
                return "flex-end";
            case "left" || "start":
                    return "flex-start"
            default:
                return "flex-start"; 
        }
    }

    render() {
        let style = {backgroundColor: this.state.backgroundcolor};
        let overBanner = (this.state.overBanner ? 'absolute' : '');
        let layout = this.state.fullwith === true ? 'container-fluid': 'container';
        let links = this.state.links;
        


        return (
            <div className={`Ǹavigation ${overBanner}`} style={style}>
                <div className={`${layout}`}>     
                    <div className={`row align-items-center`} >

                        <div className='col-sm-auto'>
                            {/* logo */}
                            {
                                this.state.logo.text 
                                ? <h1 className='text-center text-light'> {this.state.logo.text} </h1> 
                                : (this.state.logo ? <Image data={this.state.logo}/> : '')
                            }
                        </div>
                            
                        <div className='col-sm'>
                            {/* navigation */}
                            <div className="navbar-container" id="navbarSupportedContent" >
                                <style>
                                    {`
                                        .Ǹavigation a.nav-link {
                                            color: ${this.state.color};
                                        }
                                    `}
                                </style>
                                <div className="link-container d-flex flex-row flex-nowrap" style={{justifyContent: this.getNavbarAlign()}}>
                                    {links.map((link, index) => {
                                        if(link.outside) {
                                            return (
                                                <a  key={index} id={'a'+index} className="nav-link" aria-current="page" title={link.title || ''} href={link.url || ""} target="_blank" rel="noreferrer" style={{color: this.state.color}}>
                                                    {link.name} 
                                                </a>
                                            );
                                        } else {
                                            return (
                                                <NavLink 
                                                    key={index} 
                                                    className="nav-link"
                                                    activeClassName="active" 
                                                    to={link.url}>
                                                    {link.name} 
                                                </NavLink>
                                            )
                                        }
                                    })}
                                    
                                </div>
                            </div>
                        </div>

                    </div>               
                </div>
            </div>
        )


    }
    
}


/**
 * 
 *         
        return(
            <div className={`Ǹavigation ${overBanner}`} style={style}>
                <div className={`navbar`}> 
                    
                </div>
            </div> 
        )
 * 
 */
