import React from 'react';
import emitter from "../ev";
import {DynComponent} from './DynComponent';


export class Window extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        MsgObject: {
          title: '',
          component: {}
        }
      }
  }

  componentDidMount() {
    this.eventEmitter = emitter.addListener("show_window",(MsgObject) => {
      console.log("MsgObject", MsgObject);
      this.setState({MsgObject});
    });
  }
  
  componentWillUnmount(){
    emitter.removeListener(this.eventEmitter);
  }

  // Template
  render() {
      return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"> {this.state.MsgObject.title} </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {this.state.MsgObject.component.name &&  <DynComponent component={this.state.MsgObject.component} />}
              </div>
            </div>
          </div>
        </div>
      );
  }
}
/*

          <div className={`modal fade ${this.state.MsgObject.component ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">  {this.state.MsgObject.title} </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {this.state.MsgObject.component && <DynComponent ComponentName={this.state.MsgObject.component} />}
              </div>
              <div class="modal-footer">

                </div>
                </div>
              </div>
            </div>
*/