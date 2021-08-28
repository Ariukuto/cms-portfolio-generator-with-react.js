import React from 'react';
import Error from './windowComponents/Error';
import {Impressum} from './windowComponents/Impressum';
import {Text} from './windowComponents/Text.js';
 



class DynComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            component: props.component,
        }
    }

    components = {
        Error, Impressum, Text
    };

    componentWillUnmount = () => {
        this.state.component = {};
    }
    
    render() {
        let TagName = this.components[this.state.component.name || 'Error'];
        return <TagName data={this.state.component}/>
    }
}

export {DynComponent};
