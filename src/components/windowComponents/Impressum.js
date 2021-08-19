import { useState } from 'react';

const Impressum = (props) => {
    const data = props.data || {};
    console.log("props", props);
    const underline = {textDecoration: "underline"};
    const firstname = data.firstname || "<Vorname>";
    const lastname = data.lastname || "<Nachname>";
    const street = data.street || "<Straße>";
    const housenNumber = data.housenNumber || "<Hausnummer>";
    const plz = data.plz || "<Plz>";
    const location = data.location || "<Ort>";
    const phonenumber = data.phonenumber || "<Telefonnummer>";
    const fax = data.fax || "<Faxnummer>";
    const email = data.email || "<Email>";
    const umsatzsteuerId = data.umsatzsteuerId || "<DE XXX XXX XXX>";
    const haftungsauschlusstext = data.haftungsauschlusstext || "<Haftungsauschlusstext ...>";

    return(
        <div>
            <p><span style={underline}>Angaben gem. § 5 TMG:</span></p>
            <p>     
                {firstname} {lastname} <br />
                {street} {housenNumber} <br />
                {plz} {location}
            </p>
            <p><span style={underline}> Kontaktaufnahme: </span></p>
            <p>
                Telefon: {phonenumber} <br />
                Fax: {fax} <br />
                E-Mail: {email}
            </p>
            <p><strong>Umsatzsteuer-ID</strong> <br /><span style={underline}>Umsatzsteuer-Identifikationsnummer gem. § 27 a Umsatzsteuergesetz:</span></p>
            <p>{umsatzsteuerId}</p>
            <p style={{textAlign:"justify"}}
                dangerouslySetInnerHTML={{ __html: haftungsauschlusstext}} 
            />
        </div>
    )
}

export {Impressum}