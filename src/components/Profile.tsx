import React,{useState} from 'react';
import { Image, ImageData } from './Image';
import { TextboxData } from './Textbox';
 


export const Profile = ({data}:ProfileProps) => {

    const [layout] = useState(data.fullwith === true ? 'container-fluid' : 'container');
    const [shadow] = useState(data.shadow === true ? 'shadow' : '');
    const [style] = useState({
        backgroundColor: data.backgroundcolor,
        maxWidth: data.maxWidth
    })

    return (
        <div className={`Profile ${layout}`} >
            <div className={`wrapper ${shadow}`} style={style}>
                <Image data={data.image} />
                <div className="text" dangerouslySetInnerHTML={{ __html: data.textbox.text}} style={{maxWidth: data.textbox.maxWidth}} />
            </div>
        </div>
    )

}


export type ProfileData = {
    backgroundcolor: string,
    title: string,
    shadow: boolean,
    fullwith: boolean,
    maxWidth: string,
    textbox: TextboxData,
    image: ImageData,
}

export type ProfileProps = { data: ProfileData }