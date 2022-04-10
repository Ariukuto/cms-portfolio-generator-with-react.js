import React from "react";


const FlipCard = (props:any) =>  {
  return (
    <div className="FlipCard-Container">
        <div className="FlipCard">
            {props.children}
        </div>
    </div>
  );
}

FlipCard.Frontside = ({children}:any) => {
  return (
    <div className="frontside">
        {children}
    </div>
   ); 
 };

 FlipCard.Backside = ({children}:any) => {
  return (
    <div className="backside">
        {children}
    </div>
   ); 
 };

export {
  FlipCard
}




















/*
 const FlipCardContext = React.createContext("FlipCardContext");

 
 function useFlipCardContext() {
    const context = React.useContext(FlipCardContext)
    if (!context) {
      throw new Error(
        `FlipCard compound components cannot be rendered outside the FlipCard component`,
      )
    }
    return context
  }
  


export const Frontside:React.FunctionComponent = ({children}) => {
    useFlipCardContext();
    return (
        <div className="frontside">
            {children}
        </div>
    )
}

export const Backside:React.FunctionComponent<any> = ({children}) => {
    useFlipCardContext();
    return (
        <div className="backside">
            {children}
        </div>
    )
}

export const Flipcard:React.FunctionComponent<{height:string, width:string, margin:string}> = (props) => {

    const {height, width, margin} = props;

    console.log(React.Children.toArray(props.children));

    return (
        <FlipCardContext.Provider value={""}>
            <div className="FlipCard-Container">
                <div className="FlipCard">
                    {props.children}
                </div>
            </div>
      </FlipCardContext.Provider>
    );
}
*/