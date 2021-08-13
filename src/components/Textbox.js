import React from 'react';

export class Textbox extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            'text': props.textbox.text,
            'maxwidth': props.textbox.maxwidth,
        }
    }

    render() {
        let style = {maxWidth: this.state.maxwidth}
        let text = this.state.text;
        return (
            <div 
                className='Textbox' 
                style={style}  
                dangerouslySetInnerHTML={{ __html: text}} 
            />
        )
    }
}