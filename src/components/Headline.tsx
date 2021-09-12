import React, {FC, useState, useEffect} from 'react';

type Iheadline  = {
    data: {
        headlineType: string,
        maxWidth: string,
        text: string,
        align: string,
        textAlign: string
        distanceUp: string,
        distanceBottom: string,
        distanceLeft: string,
        distanceRight: string,
        lineHeight: string,
        color: string,
    }
}

const Headline = ({data}:Iheadline) :JSX.Element => {

    const [headlineType] = useState(data.headlineType)
    const [text] = useState(data.text)
    const [align] = useState(data.align);
    const [textalign] = useState(data.textAlign);
    const [distance] = useState({
        top: data.distanceUp, bottom: data.distanceBottom, left: data.distanceLeft, right: data.distanceRight
    })
    const [color] = useState(data.color);
    const [lineheight] = useState(data.lineHeight);
    const [maxwidth] = useState(data.maxWidth);
    const [style, setStyle] = useState({});

    const geAlign = () => {
        switch (align) {
            case "center":
                return "center";
            
            case "right":
                return "flex-end"; 

            default:
                return "flex-start";
        }
    }

    const renderHeadline = () => {
        switch (headlineType) {
            case "h1":
                return <h1 dangerouslySetInnerHTML={{ __html: text}} />       
            case "h2":
                return <h2 dangerouslySetInnerHTML={{ __html: text}} />          
            case "h3":
                return <h3 dangerouslySetInnerHTML={{ __html: text}} />          
            case "h4":
                return <h4 dangerouslySetInnerHTML={{ __html: text}} />   
            case "h5":
                return <h5 dangerouslySetInnerHTML={{ __html: text}} />  
            case "h6":
                return <h5 dangerouslySetInnerHTML={{ __html: text}} />  
        }
    }

    useEffect(() => {
        let style = {
            justifyContent: geAlign(),
            textAlign: textalign,
            marginTop: distance.top,
            marginBottom: distance.bottom,
            marginRight: distance.right,
            marginLeft: distance.left,
            color: color,
            lineHeight: lineheight,
        }
        setStyle(style);
    }, [color, align, textalign, distance, lineheight])

    return (
        <div  className='Headline d-flex' style={style}>
            <div style={{maxWidth: data.maxWidth}}>
                {renderHeadline()}
            </div>
            <div className="Headline-text"  />
        </div>
    )
}

export {Headline}