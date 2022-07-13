import React from "react";

export type cv_tmeLine_section_type = {
    company: {
        name: string,
        location: string,
        webseite?: string,
        logo?: string,
    }
    job_title: string,
    start_date: string,
    end_date: string,
    more?: string,
    nachweisPdF: string,
}

export type TimeLineProp = {
    data: cv_tmeLine_section_type[]
}


export const TimeLineComponent = ({data}:TimeLineProp) => {

    const create_grid_template_areas = () => {
        let str = '';
        data.forEach((entry, i) => {
            i = i + 1;
            str = i % 2 !== 1 ? str + `"entry${i} ."` : str + `". entry${i}"`;
            str = str + `\n`;
        })
        str = str + `;`;
        
        return str;
    }

    return (
        <>
        <style>
        {`  
            
            .timeline-container {
                padding: 1em 5em 1em;
                max-width: 1000px;
                padding-right: 1em;
                padding-left: 1em;
            }
            .timeline {
                line-height: 1.5em;
                font-size: 14px;
                transition: all .4s ease;
                position: relative;
                counter-reset: section;
            }
            .timeline--entry {
                position: relative;
                /* background-color: #eeeeee; */
            }
            .timeline--entry::before {
                content: none;
            }
            .timeline--entry__title {
                color: white;
                background-color: RGB(92, 163, 70);
                font-family: "Oswald", Georgia, Cambria, "Times New Roman", Times, serif;
                font-weight: 300;
                font-size: 1rem;
                padding: 1em;
                display:flex;
                justify-content: space-between;
                align-items: center;
                height: 60px;
            }
            .timeline--entry__title:before {
                content: none;
            }
            .timeline--entry__detail {
                background-color: #dddddd;
                padding: 1em;
                margin: 0;
            }
            
            @media (min-width: 1024px) {
                .timeline-container {
                    margin: 3.125em auto;
                    padding: 1em 5em 1em;
                    max-width: 1000px;
                }
                .timeline {
                    display: grid;
                    grid-gap: 4.75em;
                    grid-template-areas: ${create_grid_template_areas()}
                    row-gap: 0;
                }
                .timeline:before {
                    content: "";
                    left: 49.5%;
                    width: 10px;
                    height: 100%;
                    background: #3c3c3d;
                    position: absolute;
                    top: 0;
                    border-radius: 40px 40px;
                }
                .timeline--entry::before {
                    content: "";
                    color: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 2em;
                    height: 2em;
                    background-color: greenyellow;
                    border: .2em solid #3c3c3d;
                    border-radius: 50%;
                    position: absolute;
                    counter-increment: section;
                      /* content: counter(section); */
                    text-shadow: 0 1px 0 black;
                    left: -1.5em;
                }
                .timeline--entry__title:before {
                    content: "";
                    display: inline-block;
                    width: 1em;
                    height: 1em;
                    position: absolute;
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                    left: -1em;
                }
                .timeline--entry__detail {
                    width: 388px;
                }
            }
        
        `}
        </style>
        <div className="timeline-container">
            <div className="timeline">
                {
                    data.map((section, index) => {
                        let companyName = section.company.name ? `${section.company.name}:` : '';
                        companyName = section.company.webseite ? `<a class="link-dark" href=${section.company.webseite}>${section.company.name}: </a>` : companyName;
                        companyName = section.company.location ? companyName : `${companyName} <br />`
                        companyName = companyName === "<br />" ? '' : companyName;
                        let date = section.start_date ? section.start_date : '';
                        date = section.start_date && section.end_date ? `${section.start_date} - ${section.end_date}` : date; 
                        
                        const companyLocation = section.company.location ? `mit Sitz in ${section.company.location} <br/>` : '';
                        const gerade_ungerade = index % 2 !== 1 ? 'rechts' : 'links'
                        return (
                            <dl key={index} className={`timeline--entry ${gerade_ungerade}`}>    
                                <dt className="timeline--entry__title d-flex flex-column justify-content-center align-items-center text-center p-2">
                                    <div> {date} </div>
                                    <div> {section.job_title} </div>
                                </dt>
                                <dd className="timeline--entry__detail">
                                    <strong dangerouslySetInnerHTML={{__html: companyName}} />
                                    <span  dangerouslySetInnerHTML={{__html: companyLocation}} />
                                    {section.more}
                                </dd>
                                <div className="timeline--entry__footer  d-flex align-items-center">
                                {
                                    section.nachweisPdF 
                                    ?  <a href={`./pdfs/${section.nachweisPdF}`} target="_blank" rel="noreferrer" className="btn btn-primary w-100">
                                            Nachweis ansehen
                                        </a>
                                        
                                    :  null
                                }
                                </div>
                                
                            </dl>
                        )
                    })
                }
               
            </div>
        </div>
        </>
        
    )
}


// const {company, job_title, start_date, end_date, more} = props;