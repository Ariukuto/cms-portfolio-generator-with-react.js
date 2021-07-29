import React from 'react';
import {Navigation} from './Navigation.js';
import {Content} from './Content.js';
import {Footer} from './Footer.js';

export class App extends React.Component {
  render() {
    return (
      <div className='App'>
          <Navigation />
          <Content />
          <Footer />
      </div>
    );
  }
}

