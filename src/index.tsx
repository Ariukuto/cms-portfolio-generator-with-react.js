import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routesConfig from './config/routes.config.json';
import { getComponent } from "./components"

import { App } from './components/App';
import { PageComponent } from './components/PageComponent';
import './scss/all.scss';

const rootElement = document.getElementById("root");

const NotFound = () => {
  return(
    <div className='container' style={{paddingTop: "15%"}}>
      <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
        <h1 style={{color: "black"}}> 
          ERROR 404! Page not found!
        </h1>
      </div>
    </div>
  );
}

interface RouteConfig {
  name:string,
  path:string,
  pageConfig: string,
  nestedRoutes: RouteConfig[]
}

/*
const createRecursivRoutes = (RouteConfig:RouteConfig[], key?:number) => {
  return (
    RouteConfig.map((route:RouteConfig, index:number) => {
      const {path, pageConfig, nestedRoutes} = route;
      return (
        <Route {...path} element={<PageComponent data={pageConfig} key={index} /> }>
        {
          nestedRoutes ? () => createRecursivRoutes(nestedRoutes) : null
        }
        </Route>
      )
    })
  )
}
*/

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} >
        {routesConfig.routes.map((route:any, i) => {
          const config = route.config ? require(`./config/pages/${route.config}`) : [];
          return ( <Route path={route.path} element={<PageComponent data={config} key={i} />} /> )
        })}
        {() => {
            const config = routesConfig.pageNotFound.config ? require(`./config/pages/${routesConfig.pageNotFound.config}`) : [];
            return ( <Route path="*" element={<PageComponent data={config} />} /> )
        }}
      </Route> 
    </Routes>
  </BrowserRouter>
  ,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*
reportWebVitals();
*/
