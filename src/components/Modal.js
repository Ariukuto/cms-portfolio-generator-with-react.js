import React from 'react';
import emitter from './ev';


/**
 * @name Modal
 * @state show - if it true, than render the modal
 * @state close - if it true, than unrender the modal
 * @state title - The Title of the Modal
 * @eventlistener show_window - set state show:true, close:false and title
 */
export class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            close: false,
            title: '',
        }
    }

    componentDidMount() {
        this.eventEmitter = emitter.addListener("show_window", (MsgObject) => {
          this.setState({
              show: true,
              close: false,
              title: MsgObject.title || 'Kein Titel '
            });
        });
    }

    close = (event) => {
        this.setState({
            show: true,
            close:true
        });
    }

    render() {

        let show = this.state.show ? 'fade' : '';
        let close = this.state.close ? 'out' : '';
        let cssClasses = `${show} ${close}`;
        
        return (
            <div id="modal-container" className={cssClasses}>
                <div className="modal-background" onClick={this.close}></div>
                <div className="modal-wrapper">
                    <div className="modal">
                        <div className="modal-header">
                            <h2> {this.state.title} </h2>
                            <div className="btn-close" onClick={this.close}>
                                X
                            </div>
                        </div>
                        <div className="modal-content">
                            DynComponent
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}