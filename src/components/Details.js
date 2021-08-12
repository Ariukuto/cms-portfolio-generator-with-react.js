import React from 'react';
import { Headline } from './Headline';
import { NewImage } from './NewImage';
import { Imagebox } from './Imagebox';

export class Details extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            'fullwith': props.data.fullwith,
            'headline': props.data.headline,
            'rows': props.data.rows,
        }
    }

    render() {

        let layout = this.state.fullwith === "true" ? 'container-fluid' : 'container';

        return(
            <div className={`Details ${layout}`}>

                <Headline text={this.state.headline} />

                {this.state.rows.map((row, index) => {
                    let rest = index % 2;
                    if(rest === 0) {
                        return(
                            <div key={index} className='row'>
                                <div className='col-sm column-picture'>
                                    {/*<Imagebox imgbox={row.imgbox} />*/}
                                    <NewImage data={row.image} />
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
                                    {/*<Imagebox imgbox={row.imgbox} />*/}
                                    <NewImage data={row.image} />
                                </div>
                            </div>
                        ) 
                    }
                })}
            </div>
        )
    }
}