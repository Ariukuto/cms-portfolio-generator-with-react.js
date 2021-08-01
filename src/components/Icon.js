import React from 'react';

export class Icon extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                icon: props.icon,
            }
        }

        render() {
            return(
                <div className='Icon'>
                    <i className={this.state.icon.name}
                        style={{
                            color: this.state.icon.color,
                            fontSize: this.state.icon.size
                        }}
                    />
                </div>    
            );
        }
}