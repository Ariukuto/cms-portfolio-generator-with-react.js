import React from 'react';
import { Image } from './Image';


export class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'backgroundcolor': props.data.backgroundcolor,
            'headline': props.data.headline,
            'shadow': props.data.shadow,
            'fullwith': props.data.fullwith,
            'textbox': props.data.textbox,
            'image': props.data.image,
            maxWidth: "1000px",

        }
    }

     

    render() {
        let style = {
            backgroundColor: this.state.backgroundcolor,
            maxWidth: this.state.maxWidth
        };
        let layout = this.state.fullwith === true ? 'container-fluid' : 'container';
        let shadow = this.state.shadow === true ? 'shadow' : '';

        return(
            <div className={`Profile ${layout}`} >
                <div className={`wrapper ${shadow}`} style={style}>
                    <Image data={this.state.image} />
                    <div className="text" dangerouslySetInnerHTML={{ __html: this.state.textbox.text}} style={{maxWidth: this.state.textbox.maxWidth}} />
                </div>
            </div>
        );
    }

}   