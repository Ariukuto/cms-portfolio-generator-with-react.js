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

const config = {
    fullwith: true,
    overBanner: true,
    navbarAlign: "right",
    backgroundcolor: "#f9fafb59",
    color: "",
    logo: {   
        widescreen: {
            imageName: "profil.png",
            height: "50px",
            width: "50px",
            borderRadius: "100%",
            shadow: false,
            DistanceUp: "",
            DistanceDown: ""
        } ,   
        mobile: {
            imageName: "profil.png",
            height: "50px",
            width: "50px",
            borderRadius: "100%",
            shadow: false,
            DistanceUp: "",
            DistanceDown: ""
        }
    },
    links: [
        {name: "linkone", url: "https://test.de/"},
    ]
}


describe('Render Navigation', () => {

    test('find Nav Element', () => {
        render(<Navigation data={config} />, container);
        const navigationElement = container.querySelector(".Ǹavigation");
        expect(navigationElement).not.toBeFalsy();
    });

    test('find Navigation classes', () => {
        render(<Navigation data={config} />, container);
        const navigationElement = container.querySelector(".Ǹavigation.absolute");
        const layout = navigationElement.querySelector(".container-fluid");
        expect(navigationElement).not.toBeFalsy();
        expect(layout).not.toBeFalsy();
    });

    test("find backgroundcolor", () => {
        render(<Navigation data={config} />, container);
        const navigationElement = container.querySelector(".Ǹavigation");
        const backgroundcolor =  navigationElement.style.backgroundColor;
        expect(backgroundcolor).not.toBeFalsy();
    });

    test('render logo', () => {
        render(<Navigation data={config} />, container);
        const navigationElement = container.querySelector(".Ǹavigation");
        const logo = navigationElement.querySelector(".logo");
        const logoimage = logo.querySelector("img");
        expect(logoimage).not.toBeFalsy();      
    });

    test("check navbarAlign", () => {
        render(<Navigation data={config} />, container);
        const navigationElement = container.querySelector(".Ǹavigation");
        const navbarContainer = navigationElement.querySelector("#navbarSupportedContent");
        const justifyContent = navbarContainer.style.justifyContent;
        expect(justifyContent).toBe("flex-end");
    });


    test('find navLink', () => {
        render(<Navigation data={config} />, container);
        let navLinkElement;
        config.links.map((link, i) => {
            navLinkElement = container.querySelector("#a"+i);
        })
        expect(navLinkElement).not.toBeFalsy()
    });

    test('find true navlink Text', () => {
        render(<Navigation data={config} />, container);
        let navLinkElement;
        config.links.map((link, i) => {
            navLinkElement = container.querySelector("#a"+i);
            let name = navLinkElement.textContent;
            expect(name).toBe(link.name)
        })
    })

    test('find true navlink href', () => {
        render(<Navigation data={config} />, container);
        let navLinkElement;
        config.links.map((link, i) => {
            navLinkElement = container.querySelector("#a"+i);
            let href = navLinkElement.href;
            expect(href).toBe(link.url)
        })
    })

  

    


});