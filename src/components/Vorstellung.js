import React from 'react';
import {Headline} from './Headline.js';


export class Vorstellung extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headline: this.props.data.headline,
            img: '',
            text: this.props.data.text,
        }
        import(`../imgs/${this.props.data.img}`).then(image => {
            this.setState({
                img:image.default
             });
        });
    }

    render() {
        return(
            <div className="Vorstellung">
                <Headline text={this.state.headline}/>
                <div className='row'>
                    <div className='col-md d-flex justify-content-center align-items-center'>
                        <img src={this.state.img} alt='' />
                    </div>
                    <div className='col-md d-flex'>
                        {this.state.text}
                    </div>
                </div>
            </div>
        );
    }

}   