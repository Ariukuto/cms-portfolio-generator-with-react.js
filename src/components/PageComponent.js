
import { components } from "../components";


export const PageComponent = ({data}) => {
    return(
       <div>
           {data.map(({component, data}, i) => {
                const Component = components[component];
                if(!Component) {
                    throw new Error(`React Component ${component} wurde nicht in der components.js importiert und registiert! Bitte prüfen`);
                }
                return <Component key={i} data={data} />
           })}
       </div>
    )
}