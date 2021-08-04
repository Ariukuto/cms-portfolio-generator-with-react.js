import React from 'react';

export class Image extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            'name': this.props.img,
            'src': '',
        }
        if(props.img !== "") {
            import(`../imgs/${this.props.img}`).then(image => {
                this.setState({
                    src: image.default
                 });
            });
        }
    }

    render() {
        let src = this.state.src;
        let imgName = this.state.name;
        return <img src={src} alt={imgName} />
    }


}