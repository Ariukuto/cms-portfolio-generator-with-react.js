import React from 'react';
import {Image} from './Image';


export class Imagebox extends React.Component 
{
    constructor(props) {
        super(props);
        this.img = props.imgbox.img;
        this.height = props.imgbox.height;
    }

    render() {
        return (
            <div className='imagebox' style={{height: this.height}}>
                <Image img={this.img} />
            </div>
        )
    }
}