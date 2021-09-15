import React from 'react';


type ImageData = {
    widescreen: {
        imageName: string,
        width: string,
        height: string,
        borderRadius: string,
        DistanceUp: string,
        DistanceDown: string,
        shadow: boolean,
    }
    mobile: {
        imageName: string,
        width: string,
        height: string,
        borderRadius: string,
        DistanceUp: string,
        DistanceDown: string,
        shadow: boolean,
    }
}
export type {ImageData}

type ImageProps = {
    data: ImageData
}
export type {ImageProps}

const imgpath = "./imgs/";
export {imgpath}


/**
 * 
 * @param {ImageProps} data ImageProps
 * @returns JSX.Element
 */
const Image = ({data} : ImageProps) => {

    const widescreen = data.widescreen;
    const mobile = data.mobile;
    


    const renderWidescreenImage = () => {
        const classNames= `show_only_on_widescreen ${widescreen.shadow ? 'shadow' : ''}`;
        const cssStyle = {
            width: widescreen.width,
            height: widescreen.height,
            borderRadius: widescreen.borderRadius,
            marginTop: widescreen.DistanceUp,
            marginBottom: widescreen.DistanceDown,
        }
        if(!widescreen.imageName) {
            return <div className={classNames + " placeholder_widescreen"} style={cssStyle} />
        }
        return (
            <img className={classNames} 
                src={imgpath + widescreen.imageName}  
                alt={widescreen.imageName} 
                style={cssStyle} 
            />
        )    
    }

    const renderMobileImage = () => {
        const classNames = `show_only_on_mobile ${mobile.shadow ? 'shadow' : ''}`;
        const cssStyle = {
            width: mobile.width,
            height: mobile.height,
            borderRadius: mobile.borderRadius,
            marginTop: mobile.DistanceUp,
            marginBottom: mobile.DistanceDown,
        }
        if(!mobile.imageName) {
            return <div className={classNames + " placeholder_mobile"} style={cssStyle} />
        }
        return (
            <img className={classNames}
                src={`./imgs/${mobile.imageName}`} 
                alt={mobile.imageName}
                style={cssStyle} 
            />
        )
    }

    return (
        <div className="ImageComponent">
            {renderWidescreenImage()}
            {renderMobileImage()}
        </div> 
    )
}

export {Image}