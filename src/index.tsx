import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routesConfig from './config/routes.config.json';

import { App } from './components/App';
import { PageComponent } from './components/PageComponent';
import './scss/all.scss';

const rootElement = document.getElementById("root");

interface RouteConfig {
  name:string,
  path:string,
  pageConfig: string,
  nestedRoutes: RouteConfig[]
}



render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} >
        {routesConfig.map((route:any, i) => {
          const config = route.config ? require(`./config/pages/${route.config}`) : [];
          return ( <Route path={route.path} element={<PageComponent data={config} key={i} />} /> )
        })}
      </Route> 
    </Routes>
  </BrowserRouter>
  ,
  rootElement
);
