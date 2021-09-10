import React from 'react';
import config from '../../config/lizenzen.config.json';
import {Image} from '../Image';

const Licenses = (props) => {
    return (
        <div className="licenses-component pb-2">

            {config.map((obj, i) => {

                const imgobj = {
                    mobile: {
                        imageName: obj.imageName,
                        height: "50px",
                        width: "50px",
                    },
                    widescreen: {
                        imageName: obj.imageName,
                        height: "50px",
                        width: "50px",
                    }
                }

                return (
                    <div key={i} className="row mb-4">
                        <div className="col-3 col-sm">
                            <Image data={imgobj} />
                        </div>
                        <div className="col-sm d-flex">
                            <span className="d-flex align-content-center"
                                dangerouslySetInnerHTML={{ __html: obj.text}} 
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export {
    Licenses
}