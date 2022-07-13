import { Icompany } from "./company";

export interface Iwerdegang {
    company: Icompany,
    job_title: string,
    start_date: string,
    end_date: string,
    nachweisPdF: string,
    text: string,       
}