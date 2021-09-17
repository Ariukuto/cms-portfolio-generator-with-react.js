import React from 'react';
import {Image, ImageData} from './Image';

type BannerData = {
    fullwith: boolean,
    height: string,
    image: ImageData,
}
export type {BannerData}

type BannerProps = {
    data: BannerData
}

const Banner = ({data}:BannerProps) => {

    const fullwith = data.fullwith;
    const height = data.height;
    const image = data.image;

    return(
        <div className={`BannerComponent ${fullwith ? '' : 'container'}`} style={{height: height}}>
            <Image data={image} />
        </div> 
    );
    
}

export {Banner};