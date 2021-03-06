import React, {useState, useEffect} from 'react';

export type HeadlineData  = {
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

export type HeadlineProps = {
    data: HeadlineData
}

const Headline = ({data}:HeadlineProps) :JSX.Element => {

    const [headlineType] = useState(data.headlineType)
    const [text] = useState(data.text)
    const [align] = useState(data.align);
    const [textalign] = useState(data.textAlign);
    const [distance] = useState({
        top: data.distanceUp, bottom: data.distanceBottom, left: data.distanceLeft, right: data.distanceRight
    })
    const [color] = useState(data.color);
    const [lineheight] = useState(data.lineHeight);
    const [style, setStyle] = useState({});

    const renderHeadline = () => {

        const style= {}

        switch (headlineType) {
            case "h1":
                return <h1 style={style} dangerouslySetInnerHTML={{ __html: text}} />       
            case "h2":
                return <h2 style={style} dangerouslySetInnerHTML={{ __html: text}} />          
            case "h3":
                return <h3 style={style} dangerouslySetInnerHTML={{ __html: text}} />          
            case "h4":
                return <h4 style={style} dangerouslySetInnerHTML={{ __html: text}} />   
            case "h5":
                return <h5 style={style} dangerouslySetInnerHTML={{ __html: text}} />  
            case "h6":
                return <h5 style={style} dangerouslySetInnerHTML={{ __html: text}} />  
        }
    }

    useEffect(() => {
        
        let style = {
            justifyContent: () => {
                switch (align) {
                    case "center":
                        return "center";
                    
                    case "right":
                        return "flex-end"; 
        
                    default:
                        return "flex-start";
                }
            },
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
        </div>
    )
}

export {Headline}