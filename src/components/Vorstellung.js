import React from 'react';
import {Headline} from './Headline';
import { NewImage } from './NewImage';
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
            'imgbox':props.data.imgbox,
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
                    <NewImage data={this.state.image} />
                    <Textbox textbox={this.state.textbox} />
                </div>
            </div>
        );
    }

}   