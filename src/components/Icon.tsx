import React from 'react';

export type IconData = {
    img: string,
    distanceBottom: string,
    size: string,
    url?: string,
}

type IconProps = {
    icon: IconData
}


const Icon = ({icon}:IconProps) => {
    
    let style = {
        height: icon.size,
        marginBottom: icon.distanceBottom,
        cursor: icon.url ? "cursor" : "",
    }

    return (
        <a className='Icon' style={style} href={icon.url} target="_blank" rel="noreferrer">
            <img src={`./imgs/${icon.img}`} alt={icon.img} style={{height:"100%"}}/>
        </a>
    )
}

export {Icon}