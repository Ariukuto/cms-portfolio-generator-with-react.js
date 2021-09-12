import React, {useState, useEffect} from 'react';

type Itextbox  = {
    data: {
        maxWidth: string,
        text: string,
        align: string,
        textAlign: string
        distanceUp: string,
        distanceBottom: string,
        distanceLeft: string,
        distanceRight: string,
        lineHeight: string,
    }
}

const Textbox = ({data}:Itextbox) => {

    const [maxwidth] = useState(data.maxWidth);
    const [text] = useState(data.text)
    const [align] = useState(data.align);
    const [textalign] = useState(data.textAlign);
    const [distance] = useState({top: data.distanceUp, bottom: data.distanceBottom, left: data.distanceLeft, right: data.distanceRight})
    const [lineheight] = useState(data.lineHeight);
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

    useEffect(() => {
        let style = {
            justifyContent: geAlign(),
            textAlign: textalign,
            marginTop: distance.top,
            marginBottom: distance.bottom,
            marginRight: distance.right,
            marginLeft: distance.left,
            lineHeight: lineheight,
        }
        setStyle(style);
    }, [maxwidth, align, textalign, distance, lineheight])

    return (
        <div  className='Textbox p-1 d-flex' style={style}>
            <div className="textbox-text" dangerouslySetInnerHTML={{ __html: text}} style={{maxWidth: data.maxWidth}}/>
        </div>
    )
}

export {Textbox}