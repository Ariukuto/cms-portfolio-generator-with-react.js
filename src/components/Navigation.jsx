import React from 'react';
import { NavLink } from "react-router-dom";
import { Image } from './Image';
import config from '../config/page.config.json'; 

const Headerconfig = config.Header;

/**
 * @name Navigation
 * @description React Komponent
 */
export const Header = () => {
   
    const config = {
        fullwith:         Headerconfig.fullwith || '',
        overBanner:       Headerconfig.overBanner || '',
        navbarAlign:      Headerconfig.navbarAlign || '',
        logo:             Headerconfig.logo || '',
        backgroundcolor:  Headerconfig.backgroundcolor || '',
        color:            Headerconfig.color || '',
        links:            Headerconfig.links || '',
    }

    let overBanner = (config.overBanner ? 'absolute' : '');
    let layout = config.fullwith === true ? 'container-fluid': 'container';

    return(
        <div className={`Ǹavigation ${overBanner}`} style={{backgroundColor: config.backgroundcolor}}>
            <div className={`${layout}`}>     
                <div className={`row align-items-center`} >

                    <div className='col-sm-auto'>
                       <Logo logo={config.logo} />
                    </div>
                        
                    <div className='col-sm'>
                        
                        <Navigation {...config}/>

                    </div>

                </div>               
            </div>
        </div>
    )
}


const Logo = (props) => {
    const {logo} = props;

    if(logo.text)
        return  <h1 className='text-center text-light'> {logo.text} </h1>
    
    if(logo)
        return <Image data={config.logo}/>

    return '';
}

const Navigation = (config) => {

    const getNavbarAlign = () => {
        switch (config.navbarAlign) {
            case "center":
                return "center";
            case "right" || "end": 
                return "flex-end";
            case "left" || "start":
                    return "flex-start"
            default:
                return "flex-start"; 
        }
    };

    return(
        <div className="navbar-container" id="navbarSupportedContent" >
        <style>
            {`
                .Ǹavigation a.nav-link {
                    color: ${config.color};
                }
            `}
        </style>
        <div className="link-container d-flex flex-row flex-nowrap" style={{justifyContent: getNavbarAlign()}}>
            {config.links.map((link, index) => {
                if(link.outside) {
                    return (
                        <a  key={index} id={'a'+index} className="nav-link" aria-current="page" title={link.title || ''} href={link.url || ""} target="_blank" rel="noreferrer" style={{color: config.color}}>
                            {link.name} 
                        </a>
                    );
                } else {
                    return (
                        <NavLink 
                            key={index} 
                            className="nav-link"
                            activeclassname="active" 
                            to={link.url}>
                            {link.name} 
                        </NavLink>
                    )
                }
            })}
            
        </div>
    </div>
    )
}