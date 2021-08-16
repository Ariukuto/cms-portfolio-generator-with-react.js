import React, {useState} from 'react';

import Error from './windowComponents/Error';
import {Impressum} from './windowComponents/Impressum';
 



class DynComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentName: props.name,
        }
    }

    components = {
        Error, Impressum
    };
    
    render() {
       const TagName = this.components[this.state.componentName || 'Error'];
       return <TagName />
    }
}
export {DynComponent};
