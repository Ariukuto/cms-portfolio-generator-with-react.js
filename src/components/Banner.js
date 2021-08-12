import React, { useState } from 'react';
import {Image} from './Image';

export class Banner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            'fullwith': props.data.fullwith,
            'mobile': '',
            'desktop': '',
            'height': props.data.height,
        }

        import(`../imgs/${this.props.data.mobile}`).then(image => {
            this.setState({
                mobile:image.default
             });
        });
    }


    render() {

        let layout = this.state.fullwith !== 'true' ? 'container' : '';
        
        return (
            <div className={`Banner ${layout}`} style={{height: this.state.height}}>
                 <picture>
                     <source media="(orientation:portrait)" srcSet={this.state.mobile} />
                     <Image img={this.props.data.desktop} />
                 </picture>
            </div> 
         ); 
    }
}