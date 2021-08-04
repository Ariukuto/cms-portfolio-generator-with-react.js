
import React from 'react';
import {Banner} from './Banner.js';
import {Vorstellung} from './Vorstellung.js';
import {Iconrow} from './Iconrow.js';
import {Details} from './Details.js';


export class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'banner': props.config.banner,
            'vorstellung': props.config.vorstellung,
            'iconrow': props.config.iconrow,
            'details': props.config.details,
        }
    }

    render() {
        return (
            <div className='Content'>
                <Banner data={this.state.banner} />
                <Vorstellung data={this.state.vorstellung} />
                <Iconrow data={this.state.iconrow} />
                <Details data={this.state.details} />
            </div>
        );
    }
}