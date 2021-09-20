import React, {useState} from 'react';
import { Headline } from './Headline';
import { Image } from './Image';

const Details = (props) => {
    const [fullwith] = useState(props.data.fullwith);
    const [backgroundcolor] = useState(props.data.backgroundcolor);
    const [headline] = useState(props.data.headline);
    const [card] = useState(props.data.card);
    const [shadow] = useState(props.data.shadow);
    const [rows] = useState(props.data.rows);

    return(
        <div style={{backgroundColor:backgroundcolor}}>
            <div className={`Details ${fullwith ? 'container-fluid' : 'container'}`}>

                <Headline data={headline} />
                
                {rows.map((procject, index) => {                  
                    return (
                        <div key={index} className={`${card ? 'card' : ''} ${shadow ? 'shadow' : ''} mb-3`} style={{backgroundColor:procject.backgroundcolor}}>
                                <div className="card-row">

                                    <div className={`column-picture order-${procject.orderimagebox}`}>
                                        <div className="card-body">
                                            <Image data={procject.image} />
                                        </div>
                                    </div>

                                    <div className={`column-text order-${procject.ordertextbox}`}>
                                        <div className="card-body">
                                            <h5 className="card-title"> {procject.headline} </h5>
                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: procject.text}} />
                                            { procject.button.title ? <a href={procject.button.url} className="btn btn-primary"> {procject.button.title} </a> : ''}
                                        </div>
                                    </div>
                                </div>
                        </div>      
                    )

                })}
            </div>
        </div>
    )
}

export {Details};