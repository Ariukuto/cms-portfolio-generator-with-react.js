import React from 'react';

// config
//import pageconfig from '../config/page.config.json';
import content from '../config/content.config.json';
import navigationConfig from '../config/navigation.config.json';

import { Window }       from './Window';
import { Navigation }   from './Navigation';
import { Footer }         from './Footer';
import { Banner }       from './Banner';
import { Profile }  from './Profile';
import { Iconrow }      from './Iconrow';
import { Details }      from './Details';
import { Textbox } from './Textbox';
import { Headline } from './Headline';
import { Collection } from './Collection';

const App = () => {

  // config
  const [config, setConfig] = React.useState({});
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    let pageconfig = require("../config/page.config.json");
    setConfig(pageconfig);
    document.title = config.title;

    let style = {
      backgroundColor: pageconfig.background.backgroundcolor,
      backgroundImage: `./imgs/${pageconfig.background.img.name}`,
    }
    setStyle(style);

  }, [config]);

  const components = { Banner, Profile, Iconrow, Details, Navigation, Footer, Textbox, Headline, Collection }

  return (
    <div className='App' style={style}>
        <Window />
        <div className='Content'>
          {content.map((component, i) => {
              let Component = components[component.name];
              let data = {};
              if(component.name === "Navigation") { 
                data = navigationConfig 
              } else {
                data = component.data;
              }
              return (
                  <Component key={i} data={data}/>
              );
          })}
      </div>  
    </div>
  );
}

export {
  App
}


