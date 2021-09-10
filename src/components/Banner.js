import { useState } from 'react';
import {Image} from './Image';

const Banner = (props) => {

    const [fullwith, setFullwith] = useState(props.data.fullwith);
    const [height, setheight] = useState(props.data.height);
    const [image, setImage] = useState(props.data.image);

    return(
        <div className={`Banner ${fullwith ? '' : 'container'}`} style={{height: height}}>
            <Image data={image} />
        </div> 
    );
    
}

export {Banner};