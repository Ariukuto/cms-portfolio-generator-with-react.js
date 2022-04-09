import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routesConfig from '../config/pages.config.json';

import { Window }       from './Window';
import { Navigation }   from './Navigation';
import { Footer }         from './Footer';
import { PageComponent } from './PageComponent';



export const App = () => {

  // config
  const [config, setConfig] = React.useState({});
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    let pageconfig = require("../config/page.config.json");
    setConfig(pageconfig);
    document.title = config.title;

    let style = {
      backgroundImage: `./imgs/${pageconfig.background.img.name}`,
    }

    setStyle(style);

  }, [config]);


  return(
    <div className='App' style={style}>
      <Window />
      <div className='Content'>
        <BrowserRouter>
          <Navigation />
          <Routes>
            {routesConfig.map((route, i) => {
              const content = route.config ? require(`../config/pages/${route.config}`) : [];
              return(
                <Route 
                  path={route.path} 
                  element={<PageComponent content={content} />} 
                  key={i}
                />
              )
            })}
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )

}


