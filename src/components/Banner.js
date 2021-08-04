import React from 'react';
import {Image} from './Image';

export class Banner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mobile: '',
            desktop: '',
        }

        import(`../imgs/${this.props.data.mobile}`).then(image => {
            this.setState({
                mobile:image.default
             });
        });

        let layout = this.props.data.fullwith !== 'true' ? 'container' : '';
        this.class = `Banner ${layout}`;
    }




    render() {

        return (
            <div className={this.class}>
                 <picture>
                     <source media="(orientation:portrait)" srcSet={this.state.mobile} />
                     <Image img={this.props.data.desktop} />
                 </picture>
            </div> 
         ); 
    }
}