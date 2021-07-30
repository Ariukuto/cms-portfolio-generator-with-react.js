import React from 'react';

export class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            desktop: '',
        }
        this.loadMobileImg(this.props.data.mobile);
        this.loadDesktopImg(this.props.data.desktop);
    }

    loadMobileImg(imageName) {
        import(`../imgs/${imageName}`).then(image => {
            this.setState({
                mobile:image.default
             });
        });
    };

    loadDesktopImg(imageName) {
        import(`../imgs/${imageName}`).then(image => {
            this.setState({
                desktop:image.default
            });
        });
    };

    render() {
        return (
            <div className='Banner'>
                 <picture>
                     <source media="(orientation:portrait)" srcSet={this.state.mobile} />
                     <img src={this.state.desktop} alt="banner" />
                 </picture>
            </div> 
         ); 
    }
}