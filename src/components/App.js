import React from 'react';
import {Navigation} from './Navigation.js';
import {Content} from './Content.js';
import {Footer} from './Footer.js';
import config from '../config/config.json';

export class App extends React.Component {
  render() {
    return (
      <div className='App'>
          <Navigation config={config[0].navigation}/>
          <Content config={config[0].content}/>
          <Footer config={config[0].footer}/>
      </div>
    );
  }
}

