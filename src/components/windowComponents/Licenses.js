import config from '../../config/lizenzen.config.json';
import {Image} from '../Image';

const Licenses = (props) => {

    const list = config;

    return (
        <div className="licenses-component pb-2">

            {list.map((obj, i) => {
                console.log("obj", obj);
                return (
                    <div key={i} className="row mb-4">
                        <div className="col-3 col-sm">
                            <Image img={obj.img} height="50px" width="50px"/>
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