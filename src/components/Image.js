import React from 'react';

export class Image extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            img: '',
        }
        import(`../imgs/${this.props.img}`).then(image => {
            this.setState({
                img:image.default
             });
        });
    }

    render() {
        return(
            <img src={this.state.img} alt={this.props.img} />
        )
    }


}