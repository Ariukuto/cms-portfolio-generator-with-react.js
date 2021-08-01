import React from "react";
import { Headline } from "./Headline";
import { Icon } from "./Icon.js";

export class Iconrow extends React.Component {

    constructor(props) {
        super(props);
        this.config = this.props.data;
    }

    render() {
        return(
            <div className='Iconrow' style={{background: this.config.backgroundcolor}}>
                <Headline text={this.config.headline} />
                <div className='container'>
                    <div className='row'>
                        {this.config.fields.map((field, index) => {
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