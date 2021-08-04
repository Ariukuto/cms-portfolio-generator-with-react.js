import React from 'react';
import {Navigation} from './Navigation.js';
import {Content} from './Content.js';
import {Footer} from './Footer.js';


export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      backgroundcolor: props.config.page.background.backgroundcolor,
      backgroundimgRender: props.config.page.background.img.render,
      imgname: props.config.page.background.img.name,
      src: null,
    }

    if(this.state.backgroundimgRender === true) {
      import(`../imgs/${this.state.imgname}`).then(image => {
          this.setState({
              src:image.default
           });
      });
    }

    this.style = {
      backgroundColor: this.state.backgroundcolor,
      backgroundImage: `url(${this.state.src})`
    }

  }

  render() {
    return (
      <div className='App' style={this.style}>

          <Navigation config={this.props.config.navigation}/>
          
          <Content config={this.props.config.content}/>

          <Footer config={this.props.config.footer}/>

      </div>

    );
  }
}

