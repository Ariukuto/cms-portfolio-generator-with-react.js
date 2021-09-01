import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import {Navigation} from '../components/Navigation';

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

let testconfig = {
    links: [
        {"name": "testlink", "url": "testurl"},
    ]
}

test('Navigation link render test', () => {

    act(() => {
        render(<Navigation config={testconfig} />, container);
    });
    const navLinkElement = container.querySelector(".nav-link");
    const navLinkText = navLinkElement.textContent;
    const navLinkHref = navLinkElement.getAttribute("href");
    expect(navLinkText).toEqual("testlink");
    expect(navLinkHref).toEqual("testurl");
});