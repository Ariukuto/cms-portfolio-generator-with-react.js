import React from 'react';
import emitter from "./ev"


/**
 * @name Window
 * @description React Component 
 * @eventlistener show_window
 * @eventobj task
 */
export class Window extends React.Component {

  constructor(props) {
      super(props);
      // State = data Objekt bei Vue.js oder Ractive.js
      this.state = {
        task: {}
      }
  }

  // Eventlistener Deklarieren, nachdem das Laden der Komponente abgeschlossen ist
  // Dies dient nur als Beispiel. 
  // In Zukunft bekommt Window eine dynamische Komponente als Child Element übergeben
  // Bedeutet, dass nur ein Window gerendert wird und der Inhalt erst dann wenn benötigt. Dies spart Resourcen
  componentDidMount(){
    this.eventEmitter = emitter.addListener("show_window",(task)=>{
      this.setState({task:task});
    });
  }

  
  // Eventlistener bei Zerstörung der Komponente entfernen
  componentWillUnmount(){
    emitter.removeListener(this.eventEmitter);
  }

  // Template
  render() {
      let id = 'window' /*+ this.props.taskobj.id*/;
      return (
          <div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">  {this.state.task.title} </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {this.state.task.desc}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      ); 
  }
}