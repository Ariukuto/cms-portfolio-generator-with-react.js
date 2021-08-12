import React, { useState } from 'react';
import {Image} from './Image';


const Imagebox = (props) => {

    const [imgname] = useState(props.imgbox.img);
    const [height] = useState(props.imgbox.height);
    const [shadow] = useState(props.imgbox.shadow);
    const [rounded] = useState(props.imgbox.rounded);



    return(
        <div className={`
            imagebox ${shadow === true ? 'shadow' : ''}
            ${rounded === true ? 'rounded': ''}
        `} 
            style={{
                height:height,
                overflow: "hidden"
            }}>
            <Image img={imgname} />
        </div>
    );
}

export {Imagebox}