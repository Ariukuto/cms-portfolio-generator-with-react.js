import React from 'react';

/**
 * @name Footer
 * @description Footer React Component
 * @props config : {}
 */
export class Footer extends React.Component {

    constructor(props) {
        super(props);
        let footerobj = props.config;
        this.backgroundcolor = footerobj.backgroundcolor
        this.headlinecolor = footerobj.headlinecolor;
        this.fontcolor = footerobj.fontcolor;
        this.columns = footerobj.columns;
        this.fullwith = footerobj.fullwith;
    }

    renderHeadline(col) {
        if(!col.headline) {
            return '';
        }
        return (
            <h6 style={{color:this.headlinecolor}}>
                {col.headline} 
            </h6>
        )
    }

    render() {
        return (
            <div 
                className={`Footer ${this.fullwith !== "true" ? 'container': ''}`} 
                style={{backgroundColor:this.backgroundcolor}}
            >
                <div className='row'>
                    {this.columns.map((col, i) => {
                        return (
                            <div key={i} className="col d-flex flex-column text-center">
                               {this.renderHeadline(col)}
                                {col.links.map((link, j) => {
                                    return(
                                        <a key={j} href="" target="_blank" rel="" 
                                            style={{color:this.fontcolor}} 
                                        > 
                                            {link.name}
                                        </a>
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