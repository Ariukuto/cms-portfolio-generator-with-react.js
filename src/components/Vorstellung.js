import React from 'react';
import {Headline} from './Headline';
import {ImgTextRow} from './ImgTextRow';


export class Vorstellung extends React.Component {

    constructor(props) {
        super(props);
        this.headline = props.data.headline;
        this.textbox = props.data.textbox;
        this.imgbox = props.data.imgbox;
    }

    render() {
        return(
            <div className="Vorstellung container-fluid">
                <Headline text={this.headline}/>
                <ImgTextRow  imgbox={this.imgbox} textbox={this.textbox} />
            </div>
        );
    }

}   