import React from 'react';

 type IconData = {
    img: string,
    height: string,
    padding: string,
    distanceBottom: string,
    size: string,
    url: string,
}

export type {IconData};

type IconProps = {
    icon: IconData
}


const Icon = ({icon}:IconProps) => {
    
    let style = {
        height: icon.size,
        padding:"2rem",
        marginBottom: icon.distanceBottom,
    }

    return (
        <div className='Icon' style={icon.url ? {cursor:"pointer"} : {}}>
            <a href={icon.url} target="_blank">
                <img src={`./imgs/${icon.img}`} alt={icon.img} style={style}/>
            </a>
        </div>
    )
}

export {Icon}