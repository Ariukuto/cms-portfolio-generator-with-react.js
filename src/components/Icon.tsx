import React from 'react';

type IconProps = {
    icon: {
        name: string,
        height: string,
        padding: string,
        abstand_unten: string,
        size: string,
    }
}

const Icon:React.FC<IconProps> = ({icon}) => {

    let style = {
        height: icon.size,
        padding:"2rem",
        marginBottom: icon.abstand_unten,
    }

    return (
        <div className='Icon'>
            <img src={`./imgs/${icon.name}`} alt={icon.name} style={style}/>
        </div>
    )
}

export {Icon}