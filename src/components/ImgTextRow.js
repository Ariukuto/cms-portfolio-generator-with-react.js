import React from 'react';
import {Imagebox} from './Imagebox';
import {Textbox} from './Textbox';

export class ImgTextRow extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            'textbox': props.textbox,
            'imgbox': props.imgbox,
        }
    }

    render() {

        let textboxObj = this.state.textbox;
        let imgboxObj = this.state.imgbox;

        return(
            <div className='ImgTextRow d-flex justify-content-center'>
                <div className='d-flex flex-wrap justify-content-center'>
                    <Imagebox imgbox={imgboxObj} />
                    <Textbox textbox={textboxObj} />
                </div>
            </div>
        )
    }
}