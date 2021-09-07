import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {Navigation} from '../components/Navigation';
import config from '../config/navigation.config.json';

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

test('Render Navigation Links', () => {

    act(() => {
        render(<Navigation data={config} />, container);
    });

    config.links.map((link, index) => {
        let navLinkElement = container.querySelector("#a"+index);
        let navLinkText = navLinkElement.textContent;
        let navLinkHref = navLinkElement.getAttribute("href");
        expect(navLinkText).toEqual(link.name);
        expect(navLinkHref).toEqual(link.url);    
    });
});