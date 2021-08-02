import React from 'react';
import {Headline} from './Headline';
import {ImgTextRow} from './ImgTextRow';


export class Vorstellung extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundcolor: props.data.backgroundcolor,
            headline: props.data.headline,
            shadow: props.data.shadow,
            fullwith: props.data.fullwith,
            textbox: props.data.textbox,
            imgbox:props.data.imgbox,
        }

    }

    render() {
        return(
            <div className={`Vorstellung pb-5
                ${this.state.fullwith === true ? 'container-fluid' : 'container'}
                ${this.state.shadow === true ? 'shadow' : ''}
            `}
                style={{background:this.state.backgroundcolor}}
            >
                <Headline text={this.state.headline}/>
                <ImgTextRow  imgbox={this.state.imgbox} textbox={this.state.textbox} />
            </div>
        );
    }

}   