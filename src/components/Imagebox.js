import React from 'react';
import {Image} from './Image';


export class Imagebox extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            'img': props.imgbox.img,
            'height': props.imgbox.height,
        }
    }

    render() {
        let style = {height: this.state.height};
        let img = this.state.img;
        return (
            <div className='imagebox' style={style}>
                <Image img={img} />
            </div>
        )
    }
}