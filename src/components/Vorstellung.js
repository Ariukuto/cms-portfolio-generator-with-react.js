import React from 'react';
import {Headline} from './Headline.js';
import {Image} from './Image';


export class Vorstellung extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headline: this.props.data.headline,
            img: '',
            text: this.props.data.text,
        }
    }

    render() {
        return(
            <div className="Vorstellung">
                <Headline text={this.state.headline}/>
                <div className='row'>
                    <div className='col-md d-flex justify-content-center'>
                        <Image img={this.props.data.img} />
                    </div>
                    <div className='col-md d-flex'>
                        {this.state.text}
                    </div>
                </div>
            </div>
        );
    }

}   