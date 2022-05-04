import React, {useState} from 'react';

export const Text = (props) => {
    const [content] = useState(props.data.content); 
    console.log("props",props);
    
    return (
        <div className="TextComponent">
            <p 
                style={{textAlign:"justify"}}
                dangerouslySetInnerHTML={{ __html: content}} 
            />
            <br/>
        </div>
    )   
}  

