import React from 'react';

/**
 * @name Navigation
 * @description React Komponent
 * @param - text
 * @param - maxwidth
 */
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