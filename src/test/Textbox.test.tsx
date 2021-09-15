import { render, unmountComponentAtNode } from "react-dom";
import {Textbox, TextboxData} from '../components/Textbox';

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

const data:TextboxData = {
    text: "Test der Textbox",
    maxWidth: "400px",
    align: "center",
    textAlign: "center",
    lineHeight: "2rem",
    distanceUp: "1rem",
    distanceBottom: "1rem",
    distanceRight: "",
    distanceLeft: ""
}


describe('Textbox Test', () => {
    
    test('render Textbox', () => {
        render(<Textbox data={data} />, container);
        let textboxElement = container.querySelector(".Textbox");
        expect(textboxElement).not.toBeFalsy();
    });

    test("text is 'Test der Textbox'", () => {
        render(<Textbox data={data} />, container);
        let textboxElement = container.querySelector(".Textbox");
        expect(textboxElement.textContent).toBe(data.text);
    });

    test("maxWidth is 400px", () => {
        render(<Textbox data={data} />, container);
        let textboxElement = container.querySelector(".Textbox");
        setTimeout(() => {
            console.log(textboxElement.style) 
        }, 5000);
        
        expect(textboxElement).not.toBeFalsy();
    })



    

    

})