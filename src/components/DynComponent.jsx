import React from 'react';

import Error from './windowComponents/Error';
import {Impressum} from './windowComponents/Impressum';
import {Text} from './windowComponents/Text.js';
import {Contact} from './windowComponents/Contact';
import { Licenses } from './windowComponents/Licenses';
import { IframeComponent } from './windowComponents/iframe';

export const DynComponent = (props) => {
    console.log("props", props);
    const components = {
        Error, Impressum, Text, Contact, Licenses, IframeComponent
    };
    let Component = components[props.component.name || 'Error'] || components['Error'];
    return <Component data={props.component}/>
}
