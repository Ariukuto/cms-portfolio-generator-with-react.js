import { useState } from 'react';
import {NewImage} from './NewImage';

const Banner = (props) => {

    const [fullwith] = useState(props.data.fullwith);
    const [height] = useState(props.data.height);
    const [image] = useState(props.data.image);

    return(
        <div className={`Banner ${fullwith ? '' : 'container'}`} style={{height: height}}>
            <NewImage data={image} />
        </div> 
    );
    
}

export {Banner};