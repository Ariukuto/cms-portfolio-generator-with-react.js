import { render, unmountComponentAtNode } from "react-dom";
import {Banner, BannerData} from '../components/Banner';

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

const config : BannerData = {
    fullwith: true,
    height: "550px",
    image: {
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
    },
}

describe('Banner Test', () => {
    
    test('should render Banner component', ()  => {
        render(<Banner data={config} />, container);
        const element = container.querySelector(".BannerComponent");
        expect(element).not.toBeFalsy();
    })

    test('should BannerComponent has no container classname', ()  => {
        render(<Banner data={config} />, container);
        const element = container.querySelector(".BannerComponent");
        expect(element.className).not.toContain("container")
    })

    test('should BannerComponent has ImageComponent as Child', ()  => {
        render(<Banner data={config} />, container);
        const element = container.querySelector(".ImageComponent");
        expect(element).not.toBeFalsy();
    })

    test('Height should be 550px', ()  => {
        render(<Banner data={config} />, container);
        const height = container.querySelector(".BannerComponent").style.height;
        expect(height).toBe(config.height);
    })

    test('Full width should be true ', ()  => {
        render(<Banner data={config} />, container);
        const height = container.querySelector(".BannerComponent").style.height;
        expect(height).toBe(config.height);
    })
    

})
