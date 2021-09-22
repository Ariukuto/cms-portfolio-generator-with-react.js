import React from 'react';
import config from '../../config/lizenzen.config.json';
import {Image, imgpath} from '../Image';

const Licenses = (props) => {
    return (
        <div className="licenses-component pb-2">

            <h6 className="text-center"> This website was developed with the tool <a href='https://github.com/Ariukuto/cms-portfolio-generator-with-react.js'> cms-portfolio-generator-with-react.js </a> </h6>
            <br />

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
                    <div key={i} className="row d-flex justify-content-center align-items-center mb-2 mt-2">
                        <hr></hr>
                        <div className="col-4 d-flex justify-content-center">
                            <img src={imgpath+obj.imageName} style={{width:"50%", maxWidth:"100px"}}/>
                        </div>
                        <div className="col d-flex justify-content-start">
                            <p 
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