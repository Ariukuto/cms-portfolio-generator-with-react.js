import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {Iconrow, IconRowStates} from '../components/Iconrow';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});




let config : IconRowStates = {
    distanceUp: "string",
    distanceBottom: "string",
    distanceRight: "string",
    distanceLeft: "string",
    maxwidth: "string",
    backgroundcolor: "string",
    fields: [
        {
            icon: {
                img: "string",
                height: "120px",
                distanceBottom: "120px", 
                size: "120px"
            },
            headline: "string",
            text: "string"
        }
    ]
}



describe('Iconrow Component Test', () => {

    test('render Component Iconrow', () => {
        render(<Iconrow data={config} />, container);
        const Element = container.querySelector(".Iconrow");
        expect(Element).not.toBeFalsy();
    })

})