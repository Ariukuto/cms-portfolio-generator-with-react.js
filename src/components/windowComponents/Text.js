import React, {useState} from 'react';

const Text = (props) => {
    const [content] = useState(props.data.content);  
    
    return (
        <div>
            <p 
                style={{textAlign:"justify"}}
                dangerouslySetInnerHTML={{ __html: content}} 
            />
            <br/>
        </div>
    )   
} 

export {Text}   

