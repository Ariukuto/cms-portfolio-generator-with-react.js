import React from 'react';

export class Image extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            'name': props.img,
            'height': props.height,
            'width': props.width,
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
        return <img src={src} alt={imgName} style={{height:this.state.height, width:this.state.width}}/>
    }


}