import React from 'react';

// config
//import pageconfig from '../config/page.config.json';
import content from '../config/content.config.json';

import { Window }       from './Window';
import { Navigation }   from './Navigation';
import { Footer }         from './Footer';
import { Banner }       from './Banner.js';
import { Vorstellung }  from './Vorstellung.js';
import { Iconrow }      from './Iconrow.js';
import { Details }      from './Details.js';

const App = () => {
  const [documentTitle, setDocumentTitle] = React.useState("");
  const [backgroundColor, setBackgroundColor] = React.useState("");
  const [backgroundimgRender, setBackgroundimgRender] = React.useState("");
  const [imgname, setImgname] = React.useState("");
  const [src, setSrc] = React.useState(null);
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    const pageconfig = require("../config/page.config.json");
    console.log(pageconfig);
    setDocumentTitle(pageconfig.title);
    document.title = documentTitle;
  });

  const components = { Banner, Vorstellung, Iconrow, Details, Navigation, Footer }

  return (
    <div className='App' style={style}>
        <Window />
        <div className='Content'>
          {content.map((component) => {
              let TagName = components[component.name];
              return (
                  <TagName data={component}/>
              );
          })}
      </div>
    </div>
  );
}

export {
  App
}

/*
export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'backgroundcolor': pageconfig.background.backgroundcolor,
      'backgroundimgRender': pageconfig.background.img.render,
      'imgname': pageconfig.background.img.name,
      'src': null,
    }

    if(this.state.backgroundimgRender === true) {
      import(`../imgs/${this.state.imgname}`).then(image => {
          this.setState({
              src:image.default
           });
      });
    }
  }
  

  render() {

    const components = { Banner, Vorstellung, Iconrow, Details, Navigation, Footer }

    return (
      <div className='App' style={style}>
          <Window />
          <div className='Content'>
            {content.map((component) => {
                let TagName = components[component.name];
                return (
                    <TagName data={component}/>
                );
            })}
        </div>
      </div>

    );
  }
}
*/
