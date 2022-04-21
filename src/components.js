import { Navigation } from './components/Navigation';
import { Banner }       from './components/Banner';
import { Profile }  from './components/Profile';
import { Iconrow }      from './components/Iconrow';
import { Details }      from './components/Details';
import { Textbox } from './components/Textbox';
import { Headline } from './components/Headline';
import { Collection, FlipCardCollection } from './components/Collection';
import { TimeLineComponent } from './components/TimeLineComonent';


export const components = {
    Navigation,
    Banner,
    Profile,
    Iconrow,
    Details,
    Textbox,
    Headline,
    Collection, FlipCardCollection,
    TimeLineComponent,
}

export const getComponent = (name="") => {
    return components[name] || null
}