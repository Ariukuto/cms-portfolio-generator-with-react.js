import React from 'react';
import {Window} from './Window';
import {Navigation} from './Navigation';
import {Content} from './Content';
import {Footer} from './Footer';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'backgroundcolor': props.config.page.background.backgroundcolor,
      'backgroundimgRender': props.config.page.background.img.render,
      'imgname': props.config.page.background.img.name,
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

    let style = {
      backgroundColor: this.state.backgroundcolor,
      backgroundImage: `url(${this.state.src})`
    }

    return (
      <div className='App' style={style}>

          <Window />

          <Navigation config={this.props.config.navigation}/>
          
          <Content config={this.props.config.content}/>

          <Footer config={this.props.config.footer}/>

      </div>

    );
  }
}

