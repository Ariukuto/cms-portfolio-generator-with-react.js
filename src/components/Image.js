import React from 'react';

export class Image extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            mobile: {
                src: "",
                imageName: "",   
                height: "",
                width: "",
                borderRadius: "",
                shadow: "",
                DistanceUp: "",
                DistanceDown: "",                
            },
            widescreen: {
                src: "",
                imageName: "",      
                height: "",
                width: "",
                borderRadius: "",
                shadow: "",
                DistanceUp: "",
                DistanceDown: "",
            }
        }

        if(this.props.data.mobile && this.props.data.mobile.imageName) {
            import(`../imgs/${this.props.data.mobile.imageName}`).then(image => {
                this.setState({
                    mobile : {
                        src: image.default,
                        imageName: props.data.mobile.imageName,   
                        height: props.data.mobile.height,
                        width: props.data.mobile.width,
                        borderRadius: props.data.mobile.borderRadius,
                        shadow: props.data.mobile.shadow,
                        DistanceUp: props.data.mobile.DistanceUp,
                        DistanceDown: props.data.mobile.DistanceDown,  
                    }
                 });
            });
        }
       
        if(this.props.data.widescreen && this.props.data.widescreen.imageName) {
            import(`../imgs/${this.props.data.widescreen.imageName}`).then(image => {
                this.setState({
                    widescreen : {
                        src: image.default,
                        imageName: props.data.widescreen.imageName,      
                        height: props.data.widescreen.height,
                        width: props.data.widescreen.width,
                        borderRadius: props.data.widescreen.borderRadius,
                        shadow: props.data.widescreen.shadow,
                        DistanceUp: props.data.widescreen.DistanceUp,
                        DistanceDown: props.data.widescreen.DistanceDown,  
                    }
                 });
            });
        }
    }

    render() {
        return(
            <div className="NewImage">
                <img className={`show_only_on_widescreen ${this.state.mobile.shadow ? 'shadow' : ''}`}
                    src={this.state.widescreen.src} 
                    alt={this.state.widescreen.imageName}
                    style={{
                        width: this.state.widescreen.width,
                        height:this.state.widescreen.height,
                        borderRadius: this.state.widescreen.borderRadius,
                        marginTop: this.state.widescreen.DistanceUp,
                        marginBottom: this.state.widescreen.DistanceDown,
                    }} 
                />
                <img className={`show_only_on_mobile ${this.state.widescreen.shadow ? 'shadow' : ''}`}
                    src={this.state.mobile.src} 
                    alt={this.state.mobile.imageName}
                    style={{
                        width: this.state.mobile.width,
                        height:this.state.mobile.height,
                        borderRadius: this.state.mobile.borderRadius,
                        marginTop: this.state.mobile.DistanceUp,
                        marginBottom: this.state.mobile.DistanceDown,
                    }} 
                />
            </div>   
        )
    }


}