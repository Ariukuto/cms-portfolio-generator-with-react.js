import React from 'react';

export class Icon extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                class: props.name,
            }
        }

        render() {
            return(
                <div className='Icon'>
                    <i className={this.state.class} />
                </div>    
            );
        }
}