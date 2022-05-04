export const IframeComponent = ({data}) => {
    console.log("data", data);
    return(
        <iframe 
            src={data.url} 
            title="iframe" 
            frameBorder="0"
            style={{
                height: "100vh",
                width: "100%"
            }}
        ></iframe>
    );
}