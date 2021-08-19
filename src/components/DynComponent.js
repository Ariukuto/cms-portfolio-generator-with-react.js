import React, {useState} from 'react';

import Error from './windowComponents/Error';
import {Impressum} from './windowComponents/Impressum';
 



class DynComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            component: props.component,
        }
    }

    components = {
        Error, Impressum
    };
    
    render() {
       const TagName = this.components[this.state.component.name || 'Error'];
       return <TagName data={this.state.component}/>
    }
}
export {DynComponent};
