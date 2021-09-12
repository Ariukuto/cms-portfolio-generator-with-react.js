import React from 'react';
import {Headline} from './Headline';
import { Image } from './Image';
import {Textbox} from './Textbox';


export class Vorstellung extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'backgroundcolor': props.data.backgroundcolor,
            'headline': props.data.headline,
            'shadow': props.data.shadow,
            'fullwith': props.data.fullwith,
            'textbox': props.data.textbox,
            'image': props.data.image,
        }
    }

     

    render() {
        let style = {backgroundColor: this.state.backgroundcolor};
        let layout = this.state.fullwith === true ? 'container-fluid' : 'container';
        let shadow = this.state.shadow === true ? 'shadow' : '';

        return(
            <div className={`Vorstellung pb-5 ${layout} ${shadow}`} style={style}>
                <Headline text={this.state.headline}/>
                <div className='d-flex flex-wrap justify-content-center'>
                    <Image data={this.state.image} />
                    <Textbox data={this.state.textbox} />
                </div>
            </div>
        );
    }

}   