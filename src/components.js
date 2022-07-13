// shared Components
import { Header } from './components/Navigation';
import { Banner }       from './components/Banner';
import { Profile }  from './components/Profile';
import { Iconrow }      from './components/Iconrow';
import { Details }      from './components/Details';
import { Textbox } from './components/Textbox';
import { Headline } from './components/Headline';
import { Collection, FlipCardCollection } from './components/Collection';
import { TimeLineComponent } from './components/TimeLineComonent';

// Pages
import { Error404Page } from './components/pageComponents/error404';
import { LebenslaufPage } from './components/pageComponents/Lebenslauf';


export const components = {
    // Components
    Header,
    Banner,
    Profile,
    Iconrow,
    Details,
    Textbox,
    Headline,
    Collection, FlipCardCollection,
    TimeLineComponent,

    // Pages
    Error404Page,
    LebenslaufPage
}

export const getComponent = (name="") => {
    return components[name] || null
}