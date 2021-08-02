import React from 'react';
import { Headline } from './Headline';
import { Image } from './Image.js';

export class Details extends React.Component 
{
    constructor(props) {
        super(props);
        this.config = this.props.data;
    }

    render() {
        return(
            <div className={`Details ${this.config.fullwith === "true" ? 'container-fluid' : 'container'}`}>
                <Headline text={this.config.headline} />
                {this.config.rows.map((row, index) => {
                    let rest = index % 2;
                    if(rest === 0) {
                        return(
                            <div key={index} className='row'>
                                <div className='col-sm column-picture'>
                                    <Image img={row.imgbox.img} />
                                </div>
                                <div className='col-sm column-text'>
                                    <h4>{row.headline}</h4>
                                    {row.text}
                                </div>
                            </div>
                        )
                    } else {
                        return(
                            <div key={index} className='row'>
                                <div className='col-sm column-text'>
                                    <h4>{row.headline}</h4>
                                    {row.text}
                                </div>
                                <div className='col-sm column-picture'>
                                    <Image img={row.imgbox.img} /> 
                                </div>
                            </div>
                        ) 
                    }
                })}
            </div>
        )
    }
}