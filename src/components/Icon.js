import React from 'react';

export class Icon extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                'name': props.icon.name,
                'color': props.icon.color,
                'size': props.icon.size,
                'abstand_unten': props.icon.abstand_unten,
                'src': '',
            }
              
            if(!props.icon.is_icon) {
                import(`../imgs/${this.state.name}`).then(img => {
                    this.setState({src: img.default})
                });
            }
        }

        renderImage() {
            let imgname = this.state.name;
            let imgsrc = this.state.src;
            let style = {
                height: this.state.size,
                padding:"2rem",
                marginBottom: this.state.abstand_unten,
            }
            return(
                <div className='Icon'>
                    <img src={imgsrc} alt={imgname} style={style}/>
                </div>
            )
        }

        renderIcon() {
            let iconName = this.state.name;
            let style = {
                color: this.state.color,
                fontSize: this.state.size
            }
            return(
                <div className='Icon'>
                    <i className={iconName} style={style} />
                </div>    
            )
        }

        render() {
            if(!this.state.src) {
                return this.renderIcon();
            } 
            else {
                return this.renderImage();
            }
        }
}