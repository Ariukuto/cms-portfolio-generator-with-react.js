import React, {useState} from "react";
import { Icon, IconData } from "./Icon";

type IconRowProps = {
    data: {
        distanceUp: string,
        distanceBottom: string,
        distanceRight: string,
        distanceLeft: string,
        backgroundcolor: string,
        fields: [
            {
                icon: IconData,
                headline?: string
                text?: string
            }
        ]
    }
}

const Iconrow = ({data}:IconRowProps) => {
    const [distance] = useState({up:data.distanceUp, bottom:data.distanceBottom, right:data.distanceRight, left:data.distanceLeft});
    const [backgroundcolor] = useState(data.backgroundcolor);
    const [fields] = useState(data.fields); 

    return (
        <div className='Iconrow' style={{backgroundColor:backgroundcolor}}>
            <div className='container'>
                <div className='row'>
                    {fields.map((field, index) => {
                        return(
                            <div key={index} className='col-md d-flex flex-column text-center'>
                                <Icon icon={field.icon} />
                                <div className='headline'>
                                    <strong>{field.headline}</strong>
                                </div>
                                <div className='text' >
                                    {field.text}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export {Iconrow}

/*
export class oldIconrow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'headline': this.props.data.headline,
            'backgroundcolor': this.props.data.backgroundcolor,
            'fields': this.props.data.fields,
        }
    }

    render() {

        let style = {backgroundColor: this.state.backgroundcolor};
        let fields = this.state.fields;

        return(
            <div className='Iconrow' style={style}>
                <div className='container'>
                    <div className='row'>
                        {fields.map((field, index) => {
                            return(
                                <div key={index} className='col-md d-flex flex-column text-center'>
                                    <Icon icon={field.grafik} />
                                    <div className='headline'>
                                        <strong>{field.headline}</strong>
                                    </div>
                                    <div className='text' >
                                        {field.text}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
*/