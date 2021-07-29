import React from 'react';
import logo from '../imgs/logo.png';
import config from '../config/navigation.json';



/**
 * @name Navigation
 * @description React Komponent
 */
export function Navigation() {
    return(
        <div className='container Navigation'>
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">

                    {/* logo */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} className='logo' alt="logo" />
                    </a>

                    {/* mobile burger menu */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* navigation */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav">
                            {/* Loop */}
                            {config[0].links.map((link, index) => {
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
        </div> 
    )
}
