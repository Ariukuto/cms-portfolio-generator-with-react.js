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
    
        this.background = {background:this.state.backgroundcolor};

        let layout = this.state.fullwith === true ? 'container-fluid' : 'container';
        let shadow = this.state.shadow === true ? 'shadow' : '';
        this.class = `Vorstellung pb-5 ${layout} ${shadow}`;
    }

     

    render() {
        return(
            <div className={this.class} style={this.background}>
                <Headline text={this.state.headline}/>
                <ImgTextRow  imgbox={this.state.imgbox} textbox={this.state.textbox} />
            </div>
        );
    }

}   