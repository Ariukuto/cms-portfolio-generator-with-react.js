import config from '../../config/impressum.config.json';




/**
 * @name Impressum
 * @param {*} props 
 * @returns template
 */
const Impressum = (props) => {
    const data = config || {};
    const underline = {textDecoration: "underline"};
    const firstname = data.firstname || "<Vorname>";
    const lastname = data.lastname || "<Nachname>";
    const street = data.street || "<Straße>";
    const houseNumber = data.houseNumber || "<Hausnummer>";
    const plz = data.plz || "<Plz>";
    const location = data.location || "<Ort>";
    const phonenumber = data.phonenumber || "<Telefonnummer>";
    const fax = data.fax || "<Faxnummer>";
    const email = data.email || "<Email>";
    const umsatzsteuerId = data.umsatzsteuerId || "";
    const haftungsauschlusstext = data.haftungsauschlusstext || "<Haftungsauschlusstext ...>";

    return(
        <div>

            <h6> This website was developed with the tool <a href='https://github.com/Ariukuto/cms-portfolio-generator-with-react.js'> cms-portfolio-generator-with-react.js </a> </h6>
            <br />

            <p><span style={underline}>Angaben gem. § 5 TMG:</span></p>
            <p>     
                {firstname} {lastname} <br />
                {street} {houseNumber} <br />
                {plz} {location} {}
            </p>
            <p><span style={underline}> Kontaktaufnahme: </span></p>
            <p>
                Telefon: {phonenumber} <br />
                { fax ? `Fax: ${fax}` : ''} <br />
                E-Mail: {email}
            </p>
            { umsatzsteuerId ? <p><strong>Umsatzsteuer-ID</strong> <br /><span style={underline}>Umsatzsteuer-Identifikationsnummer gem. § 27 a Umsatzsteuergesetz:</span></p> : ""}
            <p>{umsatzsteuerId}</p>
            <p style={{textAlign:"justify"}}
                dangerouslySetInnerHTML={{ __html: haftungsauschlusstext}} 
            />
        </div>
    )
}

export {Impressum}