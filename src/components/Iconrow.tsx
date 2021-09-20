import React, {useState, useEffect} from "react";
import { Icon, IconData } from "./Icon";

type IconRowStates = {
    fullwith: boolean,
    shadow: boolean,
    card: boolean,
    distanceUp: string,
    distanceBottom: string,
    distanceRight: string,
    distanceLeft: string,
    maxwidth: string,
    wrapAt: string,
    backgroundcolor: string,
    fields: [
        {
            icon: IconData,
            headline?: string
            text?: string
        }
    ]
}

export type {IconRowStates};

type IconRowProps = {
    data: IconRowStates
}


const Iconrow = ({data}:IconRowProps) => {
    const [distance] = useState({up:data.distanceUp, bottom:data.distanceBottom, right:data.distanceRight, left:data.distanceLeft});
    const [backgroundcolor] = useState(data.backgroundcolor);
    const [maxwidth] = useState(data.maxwidth);
    const [layout, setLayout] = useState(data.fullwith ? 'container-fluid' : 'container');
    const [fields] = useState(data.fields); 
    const [style, setStyle] = useState({});

    useEffect(() => {
        let style = {   
            marginTop: distance.up,
            marginBottom: distance.bottom,
            marginLeft: distance.left,
            marginRight: distance.right,
            backgroundcolor: backgroundcolor,
            maxWidth: maxwidth
        }
        setStyle(style);
        setLayout(data.fullwith ? 'container-fluid' : 'container');

    }, [distance, backgroundcolor, maxwidth, data.fullwith, layout]);

    const getWrapAt = () => {
        switch (data.wrapAt) {
            case "":
                
                break;
        
            default:
                break;
        }
    }

    return (
        <div className={`Iconrow `+layout} style={style}>
            <div className='row'>
                {fields.map((field, index) => {
                    return(
                        <div key={index} className='col-lg'>
                            <div className={`field ${data.card ? 'card shadow p-5' : ''} mb-3`}>
                                <Icon icon={field.icon} />
                                <div className='headline'>
                                    <strong>{field.headline}</strong>
                                </div>
                                <div className='text' >
                                    {field.text}
                                </div>
                            </div>
                        </div>
                    );
                })}
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