import React from 'react';
import {Image} from './Image';

export class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            desktop: '',
        }
        this.loadMobileImg(this.props.data.mobile);
    }

    loadMobileImg(imageName) {
        import(`../imgs/${imageName}`).then(image => {
            this.setState({
                mobile:image.default
             });
        });
    };

    render() {

        return (
            <div className={`Banner + ${this.props.data.fullwith ==! 'true' ? 'container' : ''}`}>
                 <picture>
                     <source media="(orientation:portrait)" srcSet={this.state.mobile} />
                     <Image img={this.props.data.desktop} />
                 </picture>
            </div> 
         ); 
    }
}