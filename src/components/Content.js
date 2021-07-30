
import React from 'react';
import {Banner} from './Banner.js';
import {Vorstellung} from './Vorstellung.js';
import {Iconrow} from './Iconrow.js';


export class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            config: {
                banner: props.config.banner,
                vorstellung: props.config.vorstellung,
                iconrow: props.config.iconrow,
            }
        }
    }

    render() {
        return (
            <div className='Content border'>
                <Banner data={this.state.config.banner} />
                <div class='container'>
                    <Vorstellung data={this.state.config.vorstellung} />
                    <Iconrow data={this.state.config.iconrow} />
                </div>
            </div>
        );
    }
}