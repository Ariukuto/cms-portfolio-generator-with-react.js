import React, {useState} from "react";
import { FlipCard } from "./flipcard";


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
                        <div key={index} className={`collection-item shadow`} style={{"backgroundColor":backgroundcolor}}>
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
export const FlipCardCollection = ({data}:CollectionProps) => {
    return (
        <div className="container">
            <div className="FlipCardCollection">
                {data.items.map(({headline, headlinecolor ,text, textcolor, img, backgroundcolor, hoverbgcolor}, index) => {
                     return (
                        <div key={index} className={`collection-item`}>
                            <FlipCard>
                                <FlipCard.Frontside>
                                    <div className="d-flex justify-content-center align-items-center bg-light border shadow" style={{background:backgroundcolor}}> 
                                        <img src={`./imgs/${img}`} alt={img}/>
                                    </div>
                                </FlipCard.Frontside>
                                <FlipCard.Backside>
                                    <div className="d-flex flex-column justify-content-around align-items-center border shadow p-1" style={{background:hoverbgcolor}}>
                                        <h3 className="headline" style={{color:headlinecolor}}> 
                                            {headline} 
                                        </h3>
                                        <span className="text" style={{color:textcolor}}>
                                            {text}
                                        </span>
                                        <img src={`./imgs/${img}`} alt={img}/>
                                    </div>                    
                                </FlipCard.Backside>
                            </FlipCard>
                        </div>
                     )
                })}
            </div>
        </div>
    )
}

export {
    Collection
}