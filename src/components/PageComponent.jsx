
import { components, getComponent } from "../components";


export const PageComponent = ({data}) => {
    console.log("PageComponent data", data);
    return(
       <>
           {data.map(({component, data}, i) => {
                const Component = getComponent(component);
                if(!Component) {
                    throw new Error(`React Component ${component} wurde nicht in der components.js importiert und registiert! Bitte prüfen`);
                }
                return <Component key={i} data={data} />
           })}
       </>
    )
}