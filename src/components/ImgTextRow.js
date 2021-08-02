import React from 'react';
import {Imagebox} from './Imagebox';
import {Textbox} from './Textbox';

export class ImgTextRow extends React.Component 
{
    constructor(props) {
        super(props);
        this.textbox = this.props.textbox;
        this.imgbox = this.props.imgbox;
    }

    render() {
        return(
            <div className='ImgTextRow d-flex justify-content-center'>
                <div className='d-flex flex-wrap'>
                    <Imagebox imgbox={this.imgbox} />
                    <Textbox textbox={this.textbox} />
                </div>
            </div>
        )
    }
}