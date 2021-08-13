import React, {useState} from 'react';

import Error from './windowComponents/Error';




class DynComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentName: props.name,
        }
    }

    components = {
        Error,
    };
    
    render() {
       const TagName = this.components[this.state.componentName || 'Error'];
       return <TagName />
    }
}
export {DynComponent};
