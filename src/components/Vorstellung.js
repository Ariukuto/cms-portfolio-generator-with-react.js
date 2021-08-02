import React from 'react';
import {Headline} from './Headline.js';
import {Image} from './Image';


export class Vorstellung extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headline: this.props.data.headline,
            textbox: this.props.data.textbox,
            imgbox: this.props.data.imgbox,
        }
    }

    render() {
        return(
            <div className="Vorstellung container">
                <Headline text={this.state.headline}/>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-wrap'>
                        <div className='imagebox' style={{height: this.state.imgbox.height}}>
                            <Image img={this.state.imgbox.img} />
                        </div>
                        <div className='text' style={{maxWidth: this.state.textbox.width}}>
                            {this.state.textbox.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}   