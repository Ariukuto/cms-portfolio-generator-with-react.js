import React from 'react';
import { Headline } from './Headline';
import { Image } from './Image.js';

export class Details extends React.Component 
{
    constructor(props) {
        super(props);
        console.log("Details props", props);
        this.state = {
            config: this.props.data
        }
    }

    render() {
        return(
            <div className='Details'>
                <Headline text={this.state.config.headline} />
                {this.state.config.content.map((content, index) => {
                    let rest = index % 2;
                    if(rest === 0) {
                        return(
                            <div key={index} className='row'>
                                <div className='col-sm column-picture'>
                                    <Image img={content.img} />
                                </div>
                                <div className='col-sm column-text'>
                                    <h4>{content.headline}</h4>
                                    {content.text}
                                </div>
                            </div>
                        )
                    } else {
                        return(
                            <div key={index} className='row'>
                                <div className='col-sm column-text'>
                                    <h4>{content.headline}</h4>
                                    {content.text}
                                </div>
                                <div className='col-sm column-picture'>
                                    <Image img={content.img} /> 
                                </div>
                            </div>
                        ) 
                    }

                })}
            </div>
        )
    }
}