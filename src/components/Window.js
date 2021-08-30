import React from 'react';
import emitter from '../ev';
import {DynComponent} from './DynComponent';


/**
 * @name Window
 * @state show - if it true, than render the modal
 * @state close - if it true, than unrender the modal
 * @state title - The Title of the Modal
 * @eventlistener show_window - set state show:true, close:false and title
 * @todo Dafor sorgen, dass der window-content gescrollt werden kann. Body ist schon erledigt
 */
export class Window extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            close: false,
            showDynComponent: false,
            pathname: window.location.pathname,
            MsgObject: {
                title: '',
                component: ''
            }
        }
    }

    componentDidMount = () => {
        this.eventEmitter = emitter.addListener("show_window", (MsgObject) => {
            let body = document.querySelector("body");
            body.style.overflow = "hidden";
            body.style.paddingRight = "15px";
            this.setState({
              show: true,
              close: false,
              showDynComponent: true,
              MsgObject: MsgObject
            });
        });

        switch (this.state.pathname.toLocaleLowerCase()) {
            case "/impressum":
                this.eventEmitter.emit('show_window', {
                    title: 'Impressum',
                    component: {
                        name: 'Impressum',
                    }
                }); 
                break;

                case "/datenschutz":
                    this.eventEmitter.emit('show_window', {
                        title: 'Datenschutz',
                        component: {
                            name: 'Datenschutz',
                        }
                    }); 
                    break;

                case "/kontakt":
                    this.eventEmitter.emit('show_window', {
                        title: 'Kontakt',
                        component: {
                            name: 'Contact',
                        }
                    }); 
                    break;
        
            default:
                break;
        }
    }
    
    close = (event) => {
        this.setState({
            show: true,
            close:true,
            showDynComponent: false,
        });
        let body = document.querySelector("body");
        body.style.overflow = "unset";
        body.style.paddingRight = "unset";
    }

    render() {

        let show = this.state.show ? 'windowFadeIn' : '';
        let close = this.state.close ? 'windowFadeOut' : '';
        let cssClasses = `${show} ${close}`;
        
        return (
            <div id="window-container" className={cssClasses}>
                <div className="window-background" onClick={this.close}></div>
                <div className="window-wrapper">
                    <div className="window">
                        <div className="window-header">
                            <h2> {this.state.MsgObject.title} </h2>
                            <div className="btn-close" onClick={this.close}></div>
                        </div>
                        <div className="window-content">
                            {this.state.showDynComponent && <DynComponent component={this.state.MsgObject.component} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}