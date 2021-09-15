import { render, unmountComponentAtNode } from "react-dom";
import {Image, ImageData} from '../components/Image';

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

let config : ImageData = {
    widescreen: {
        imageName: "profil.png",
        width: "200px",
        height: "250px",
        borderRadius: "string",
        DistanceUp: "10px",
        DistanceDown: "20px",
        shadow: true,
    },
    mobile: {
        imageName: "profil.png",
        width: "string",
        height: "string",
        borderRadius: "string",
        DistanceUp: "string",
        DistanceDown: "string",
        shadow: false,
    }
}

describe('Image Test', () => {

    test('should render Image', () => {
        render(<Image data={config} />, container)
        const ImageElement = container.querySelector(".ImageComponent");
        expect(ImageElement).not.toBeFalsy();
    })

    test('should render Widescreen Image or Div', () => {
        render(<Image data={config} />, container)
        const show_only_on_widescreen = container.querySelector(".show_only_on_widescreen");
        expect(show_only_on_widescreen).not.toBeFalsy();
    })

    test('should render mobile Image or Div', () => {
        render(<Image data={config} />, container)
        const show_only_on_mobile = container.querySelector(".show_only_on_mobile");
        expect(show_only_on_mobile).not.toBeFalsy();
    })

    test('should render not placeholder_widescreen Div', () => {
        render(<Image data={config} />, container)
        const placeholder_widescreen = container.querySelector(".placeholder_widescreen");
        expect(placeholder_widescreen).toBeFalsy();
    })

    test('should render not placeholder_mobile Div', () => {
        render(<Image data={config} />, container)
        const placeholder_mobile = container.querySelector(".placeholder_mobile");
        expect(placeholder_mobile).toBeFalsy();
    })

    test('should render widescren <img /> Element', () => {
        render(<Image data={config} />, container)
        const img_mobile = container.querySelector("img.show_only_on_widescreen");
        expect(img_mobile).not.toBeFalsy();
    })

    test('should render mobile <img /> Element ', () => {
        render(<Image data={config} />, container)
        const img_mobile = container.querySelector("img.show_only_on_mobile");
        expect(img_mobile).not.toBeFalsy();
    })

    test('should widescreen img src = "http://localhost/imgs/profil.png"', () => {
        render(<Image data={config} />, container)
        const widescreen_src = container.querySelector("img.show_only_on_widescreen").src;
        expect(widescreen_src).toBe("http://localhost/imgs/"+config.widescreen.imageName);
    })

    test('should mobile img src = "http://localhost/imgs/profil.png"', () => {
        render(<Image data={config} />, container)
        const mobile_src = container.querySelector("img.show_only_on_mobile").src;
        expect(mobile_src).toBe("http://localhost/imgs/"+config.widescreen.imageName);
    })

    test('should widescreen img style is correct"', () => {
        render(<Image data={config} />, container)
        const img = container.querySelector("img.show_only_on_widescreen");
        const width = img.style.width;
        const height = img.style.height;
        const borderRadius = img.style.borderRadius;
        const marginTop = img.style.marginTop;
        const marginBottom = img.style.marginBottom;
        const widescreenconfig = config.widescreen;
        expect(width).toBe(widescreenconfig.width);
        expect(height).toBe(widescreenconfig.height);
        expect(borderRadius).toBe(widescreenconfig.borderRadius);
        expect(marginTop).toBe(widescreenconfig.DistanceUp);
        expect(marginBottom).toBe(widescreenconfig.DistanceDown);
    })

    test('should shadow class on img', () => {
        render(<Image data={config} />, container)
        const classlist = container.querySelector("img.show_only_on_widescreen").classList;
        expect(classlist).toContain("shadow")
    })

    test('should render widescreen placeholder div if imgName is falsy', () => {
        config.widescreen.imageName = "";
        render(<Image data={config} />, container)
        const element = container.querySelector(".placeholder_widescreen");
        expect(element).not.toBeFalsy();
    })    
    
})
