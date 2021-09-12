import React, {useState, useEffect} from 'react';

type Itextbox  = {
    data: {
        maxwidth: string,
        text: string,
        align: string,
        textAlign: string
        distanceUp: string,
        distanceBottom: string,
        lineHeight: string,
    }
}

/**
 * 
 * @param {Itembox} data 
 * @returns 
 */
const Textbox = ({data}:Itextbox) => {

    const [maxwidth] = useState(data.maxwidth);
    const [text] = useState(data.text)
    const [align] = useState(data.align);
    const [textalign] = useState(data.textAlign);
    const [distance] = useState({top: data.distanceUp, bottom: data.distanceBottom});
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
            lineHeight: lineheight,
        }
        setStyle(style);
    }, [maxwidth, align, textalign, distance, lineheight])

    return (
        <div  className='Textbox p-1 d-flex' style={style}>
            <div dangerouslySetInnerHTML={{ __html: text}} style={{maxWidth: data.maxwidth}}/>
        </div>
    )
}

export {Textbox}