import React from "react";
import { Headline } from "./Headline";
import { Icon } from "./Icon";

export class Iconrow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'headline': this.props.data.headline,
            'backgroundcolor': this.props.data.backgroundcolor,
            'fields': this.props.data.fields,
        }
    }

    render() {

        let headlineText = this.state.headline;
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