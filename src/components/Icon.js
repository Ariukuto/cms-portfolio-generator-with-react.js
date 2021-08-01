import React from 'react';

export class Icon extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                image: null
            }
            let data = props.icon;
            let is_icon = data.is_icon;
            this.name = data.name;
            this.color = data.color;
            this.size = data.size;
            this.abstand_unten = data.abstand_unten;
            
            if(is_icon === false) {
                import(`../imgs/${this.name}`).then(img => {
                    console.log(img);
                    this.setState({image: img.default})
                });
            }
        }

        render() {
            if(this.state.image) {
                return(
                    <div className='Icon'>
                        <img 
                            src={this.state.image} alt={this.name}
                            style={{
                                height: this.size,
                                padding:"2rem",
                                marginBottom: this.abstand_unten,
                            }}
                        />
                    </div>
                )
            }
            return(
                <div className='Icon'>
                    <i className={this.name}
                        style={{
                            color: this.color,
                            fontSize: this.size
                        }}
                    />
                </div>    
            );
        }
}