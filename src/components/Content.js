
import config from '../config/content.json';
import {Banner} from './Banner.js';
import {Vorstellung} from './Vorstellung.js';
import {Icons} from './Icons.js';



export function Content() {
    return (
        <div className='Content border'>
            <Banner bannerobj={config[0].banner} />
            <div class='container'>
                <Vorstellung />
                <Icons />
            </div>
        </div>
    );
}