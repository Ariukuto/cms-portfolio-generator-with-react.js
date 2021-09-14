import React from 'react';

 type IconData = {
    img: string,
    height: string,
    distanceBottom: string,
    size: string,
    url?: string,
}

export type {IconData};

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
        <div className='Icon' style={{marginBottom: icon.distanceBottom}}>
            <a href={icon.url} target="_blank" rel="noreferrer">
                <img src={`./imgs/${icon.img}`} alt={icon.img} style={style}/>
            </a>
        </div>
    )
}

export {Icon}