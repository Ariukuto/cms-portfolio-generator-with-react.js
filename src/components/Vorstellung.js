import React from 'react';
import {Headline} from './Headline.js';
import {Imagebox} from './Imagebox';
import {Textbox} from './Textbox';


export class Vorstellung extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headline: this.props.data.headline,
            textbox: this.props.data.textbox,
            imgbox: this.props.data.imgbox,
        }
    }

    render() {
        return(
            <div className="Vorstellung container">
                <Headline text={this.state.headline}/>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-wrap'>
                        <Imagebox imgbox={this.state.imgbox} />
                        <Textbox textbox={this.state.textbox} />
                    </div>
                </div>
            </div>
        );
    }

}   