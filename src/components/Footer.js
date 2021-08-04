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
        
        return (
            <h6 style={{color:this.state.headlinecolor}}>
                {col.headline} 
            </h6>
        )
    }

    render() {

        let layout = this.fullwith !== "true" ? 'container': '';
        let style = {backgroundColor: this.state.backgroundColor};

        return (
            <div 
                className={`Footer ${layout}`} style={style}>
                <div className='row'>
                    {this.state.columns.map((col, i) => {
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