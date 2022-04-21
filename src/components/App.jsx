import React from 'react';

import { Window }       from './Window';
import { Navigation }   from './Navigation';
import { Footer }         from './Footer';
import { Outlet } from 'react-router-dom';


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
        <Navigation />
        <div className='Content'>
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}


