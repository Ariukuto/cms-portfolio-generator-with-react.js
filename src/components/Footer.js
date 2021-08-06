import React from 'react';

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
        return (
            <div className={`Footer ${layout}`} style={footerstyle}>
                <div className='row'>
                    {this.state.columns.map((col, i) => {
                        return (
                            <div key={i} className="col d-flex flex-column text-center">
                               {this.renderHeadline(col)}
                                {col.links.map((link, j) => {
                                    
                                    return(
                                        <a key={j} href="" target="_blank" rel="" style={linkstyle}> 
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