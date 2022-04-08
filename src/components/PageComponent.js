
import { components } from "../components";


export const PageComponent = ({content}) => {
    return(
       <div>
           {content.map(({component, data}, i) => {
                const Component = components[component];
                return <Component key={i} data={data} />
           })}
       </div>
    )
}