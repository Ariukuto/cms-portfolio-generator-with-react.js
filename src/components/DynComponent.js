import React from 'react';
import Error from './windowComponents/Error';
import {Impressum} from './windowComponents/Impressum';
import {Text} from './windowComponents/Text.js';
import {Contact} from './windowComponents/Contact';

class DynComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            component: props.component,
        }
    }   

    components = {
        Error, Impressum, Text, Contact
    };

    componentWillUnmount = () => {
        this.setState({compponent: {}});
    }
    
    render() {
        console.log(this.state.component);
        let TagName = this.components[this.state.component.name || 'Error'] || this.components['Error'];
        return <TagName data={this.state.component}/>
    }
}

export {DynComponent};
