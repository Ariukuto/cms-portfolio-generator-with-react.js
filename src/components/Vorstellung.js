import React from 'react';
import {Headline} from './Headline';
import {ImgTextRow} from './ImgTextRow';


export class Vorstellung extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'backgroundcolor': props.data.backgroundcolor,
            'headline': props.data.headline,
            'shadow': props.data.shadow,
            'fullwith': props.data.fullwith,
            'textbox': props.data.textbox,
            'imgbox':props.data.imgbox,
        }
    }

     

    render() {
        let style = {backgroundcolor: this.state.backgroundcolor};
        let layout = this.state.fullwith === true ? 'container-fluid' : 'container';
        let shadow = this.state.shadow === true ? 'shadow' : '';
        let headlineText = this.state.headline;
        let imageboxObj = this.state.imgbox;
        let textboxObj = this.state.textbox;

        return(
            <div className={`Vorstellung pb-5 ${layout} ${shadow}`} style={style}>
                <Headline text={headlineText}/>
                <ImgTextRow  imgbox={imageboxObj} textbox={textboxObj} />
            </div>
        );
    }

}   