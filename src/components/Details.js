import React, {useState} from 'react';
import { Headline } from './Headline';
import { Image } from './Image';

const Details = (props) => {
    const [fullwith] = useState(props.data.fullwith);
    const [backgroundcolor] = useState(props.data.backgroundcolor);
    const [headline] = useState(props.data.headline);
    const [rows] = useState(props.data.rows);

    return(
        <div style={{backgroundColor:backgroundcolor}}>
            <div className={`Details ${fullwith ? 'container-fluid' : 'container'}`}>

                <Headline data={headline} />

                {rows.map((row, index) => {
                    return(
                        <div key={index} className='row' style={{backgroundColor:row.backgroundcolor}}>
                            <div className={`col-sm column-picture order-${row.orderimagebox}`}>
                                <Image data={row.image} />
                            </div>
                            <div className={`col-lg column-text order-${row.ordertextbox}`}>
                                <div className={`${row.textbox.card ? 'card' : ''} ${row.textbox.shadow ? 'shadow' : ''}`}>
                                    <div className="card-body">
                                        <h5 className="card-title">{row.headline}</h5>
                                        <p className="card-text" dangerouslySetInnerHTML={{ __html: row.textbox.text}} />
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