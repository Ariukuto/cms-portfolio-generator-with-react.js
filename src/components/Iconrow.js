import React from "react";
import { Headline } from "./Headline";
import { Icon } from "./Icon.js";

export class Iconrow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            config: this.props.data
        }
    }

    render() {
        return(
            
            <div className='Iconrow' style={{background: this.state.config.backgroundcolor}}>
                <Headline text={this.state.config.headline} />
                <div className='container'>
                    <div className='row'>
                        {this.state.config.icons.map((icon, index) => {
                            return(
                                <div key={index} className='col-md d-flex flex-column text-center'>
                                    <Icon name={icon.name} />
                                    <div className='headline'>
                                        <strong>{icon.headline}</strong>
                                    </div>
                                    <div className='text' >
                                        {icon.text}
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