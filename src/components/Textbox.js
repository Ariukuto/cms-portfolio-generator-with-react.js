import React from 'react';

export class Textbox extends React.Component 
{
    constructor(props) {
        super(props);
        this.text = props.textbox.text;
        this.maxwidth = props.textbox.maxwidth;
    }

    render() {
        return (
            <div className='Textbox' style={{maxWidth:this.maxwidth}}>
                {this.text}
            </div>
        )
    }
}