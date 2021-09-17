import React, {useState} from "react";

type CollectionProps = {
    data: {
        items: [
            {
                headline:string, 
                headlinecolor:string, 
                text:string, 
                textcolor:string, 
                img:string, 
                backgroundcolor:string, 
                hoverbgcolor:string},
        ]
    }
}

const Collection = ({data}:CollectionProps) => {
    const [items] = useState(data.items);
    return (
        <div className="container">
            <div className="Collection">
                {items.map(({headline, headlinecolor ,text, textcolor, img, backgroundcolor, hoverbgcolor}, index) => {
                    return(
                        <div key={index} className={`collection-item shadow`} style={{backgroundColor:backgroundcolor}}>
                            <img src={`./imgs/${img}`} alt={img}/>
                            <div className="text-container" style={{backgroundColor:hoverbgcolor, color:textcolor}}>
                                <h3 className="headline"> {headline} </h3>
                                <p className="text" > {text} </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export {Collection}