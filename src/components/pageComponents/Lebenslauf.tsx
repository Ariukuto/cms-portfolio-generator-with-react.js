import {Iwerdegang} from '../../interfaces/werdegang';
import { openWindow, showPdf } from '../Window';


let werdegang_list = require("../../config/pages/werdegang.config.json")[1].data;
console.log("werdegang_list", werdegang_list);

export const LebenslaufPage = () => {
    return (
        <div id="LebenslaufPage" className="container">
            <div className="grid-container">
                <ProfileItem />
                <div className="grid-item werdegang">
                    <h4 className="mx-auto"> - Werdegang - </h4>
                    <div className="werdegang-scroll-content">
                        {werdegang_list.map((data:Iwerdegang) => {
                            return <WerdegangItem {... data} />
                        })}
                    </div>
                </div>     
                <div className="grid-item sidebar-right-1">
                    <h4 className="mx-auto"> - Fachliche Schwerpunkte - </h4>
                    <h5 className='border mx-auto p-2'>
                        Webentwicklung
                    </h5>
                    <h5 className='border mx-auto p-2'>
                        Frontend Entwicklung
                    </h5>
                    <h5 className='border mx-auto p-2'>
                        Softwarearchitektur
                    </h5>
                    <h5 className='border mx-auto p-2'>
                        Beratung und Planung
                    </h5>
                    <h5 className='border mx-auto p-2'>
                        API Entwicklung
                    </h5>
                </div>
                <div className="grid-item sidebar-right-2">
                    <h4 className="mx-auto"> - Fachliche Schwerpunkte - </h4>
                    <h5 className='border text-center mx-auto p-2'>
                        Webentwicklung
                    </h5>
                    <h5 className='border text-center mx-auto p-2'>
                        Frontend Entwicklung
                    </h5>
                    <h5 className='border text-center mx-auto p-2'>
                        Softwarearchitektur
                    </h5>
                    <h5 className='border text-center mx-auto p-2'>
                        Beratung und Planung
                    </h5>
                    <h5 className='border text-center mx-auto p-2'>
                        API Entwicklung
                    </h5>
                </div>                 
            </div>
        </div>
    )
}

const ProfileItem = (props:any) => {
    const profil = {
        Name:"Sven Büttner",
        Adresse: {straße:"Ahornstraße", hausnummer:"14", plz:"97506", ort:"Grafenrheinfeld"},
        Telefon:"+4915757791914",
        Mail:"kontakt@buettner-sven.de",
        Webseite:"https://buettner-sven.de",
        Github: "https://github.com/Ariukuto",
        Geburtsdatum:"18.08.1993",
        Geburtsort: "Paderborn",
        Familienstand: "ledig"
    };

    return (
        <div className="grid-item profile">
            <div className="data">
                {Object.keys(profil).map((key, value) => {
                    return (
                    <div className="grid-row">
                        <div className='grid-col'>
                            {key}
                        </div>
                        <div className="grid-col">
                            {key}
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="img">
                <img src="./imgs/profilImg.png" alt="" />
            </div> 
        </div>
    )
}

const WerdegangItem = (props:Iwerdegang) => {
    let {start_date, end_date, job_title, company, nachweisPdF, text} = props;

    const renderNachweisPdf = () => {
        if (nachweisPdF) {
            return (
                /*<a href={`./pdfs/${nachweisPdF}`} target="_blank" rel="noreferrer" className="btn btn-primary w-100">
                    Nachweis
                </a> */
                <button onClick={showPdf(nachweisPdF)} className='btn w-100 btn-primary'>
                    Nachweis
                </button>
            )
        }
        return (
            <button className="btn text-dark btn-secondary w-100" disabled={true}>
                Nachweis
            </button>
           
        )
    }

    const showInfo= (title:string, content:any) => {
        return openWindow({
            title: title,
            component: {
                name:"Text",
                content: content
            }
        })    
    }

    return(
        <div className="werdegang-item">
            <div className="date">
                {start_date} - {end_date||"Heute"}
            </div>
            <div className="title">
                {job_title}
            </div>
            <div className="company">
                {company.name}
            </div>
            <div className="verification">
                {renderNachweisPdf()}
            </div>
            <div className="more">
                <button onClick={showInfo("title", text)} className='btn w-100 btn-info'>
                    Info
                </button>
            </div>
        </div>
    )
}

