export const Error404Page = ({data}) => {
    const { title } = data;
    return(
        <div id="ErrorPage" className="d-flex justify-content-center align-items-center h-100 w-100">
            <h1 className="text-dark"> 
                {title} 
            </h1>
        </div>
    )    
}