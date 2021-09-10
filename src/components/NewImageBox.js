import React from 'react';
import {Image} from './Image';

/**
 * @deprecated
 */
class NewImageBox extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           image: props.data.image,
           height: props.data.height,
           width: props.data.width,
           shadow: props.data.shadow,
           rounded: props.data.rounded,
           roundedRadius: props.data.roundedRadius,
       } 
    }

    render() {
        return(
            <div className={`
                imagebox ${this.state.shadow === true ? 'shadow' : ''}
                ${this.state.rounded === true ? 'rounded': ''}
            `} 
            style={{
                height:this.state.height,
                overflow: "hidden",
                width: this.state.width,
                height: this.state.height,
                borderRadius: "100%"
            }}>
            <Image data={this.state.image} />
        </div>
        )
    }
}