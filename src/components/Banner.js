import React ,{ useState } from 'react';
import {Image} from './Image';

const Banner = (props) => {

    const [fullwith] = useState(props.data.fullwith);
    const [height] = useState(props.data.height);
    const [image] = useState(props.data.image);

    return(
        <div className={`Banner ${fullwith ? '' : 'container'}`} style={{height: height}}>
            <Image data={image} />
        </div> 
    );
    
}

export {Banner};