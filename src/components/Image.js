import React from 'react';

const Image = ({data}) => {

    const [widescreen] = React.useState(data.widescreen);
    const [mobile] = React.useState(data.mobile);

    return (
        <div className="NewImage">
            <img className={`show_only_on_widescreen ${widescreen.shadow ? 'shadow' : ''}`}
                src={`./imgs/${widescreen.imageName}`} 
                alt={widescreen.imageName}
                style={{
                    width: widescreen.width,
                    height: widescreen.height,
                    borderRadius: widescreen.borderRadius,
                    marginTop: widescreen.DistanceUp,
                    marginBottom: widescreen.DistanceDown,
                }} 
            />
            <img className={`show_only_on_mobile ${mobile.shadow ? 'shadow' : ''}`}
                src={`./imgs/${mobile.imageName}`} 
                alt={mobile.imageName}
                style={{
                    width: mobile.width,
                    height: mobile.height,
                    borderRadius: mobile.borderRadius,
                    marginTop: mobile.DistanceUp,
                    marginBottom: mobile.DistanceDown,
                }} 
            />
    </div> 
    )
}

export {Image}