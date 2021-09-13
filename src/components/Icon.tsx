import React from 'react';

 type IconData = {
    img: string,
    height: string,
    padding: string,
    distanceBottom: string,
    size: string,
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
        <div className='Icon'>
            <img src={`./imgs/${icon.img}`} alt={icon.img} style={style}/>
        </div>
    )
}

export {Icon}