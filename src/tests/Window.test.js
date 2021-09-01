import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import emitter from "../ev";
import {Window} from '../components/Window';

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

const triggerEvent = () => {
  emitter.emit("show_window", {
    title:"Test",
    component: {
        "name": "Text",
        "content": "Test Text ..."
    }
  });
}

test('Window render test', () => {
  act(() => {
    render(<Window />, container)
  });
  triggerEvent();
  let title = container.querySelector(".window-title").textContent;
  let content = container.querySelector(".TextComponent").textContent;
  expect(title).toBe("Test");
  expect(content).toBe("Test Text ...");
});
