import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {Textbox} from '../components/Textbox';

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

const data = {
    text: "Test der Textbox",
    maxwidth: "400px",
}


test('Render Navigation Links', () => {

    act(() => {
        render(<Textbox textbox={data} />, container);
    });

    let textbox = container.querySelector(".Textbox");
    let text = textbox.textContent;
    let maxwidth = textbox.style.maxWidth;

    expect(text).toEqual(data.text);
    expect(maxwidth).toEqual(data.maxwidth);
  

});