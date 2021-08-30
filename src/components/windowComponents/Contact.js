import contactConfig from '../../config/contact.config.json';

const Contact = () => {
    const data = contactConfig;
    const text = data.text;
    const list = data.list;

    return (
        <div id="Contact">
            <p style={{textAlign:"justify"}} dangerouslySetInnerHTML={{ __html: text}} />
            <ul className="contact-item-list" style={{paddingBottom:"1px"}}>
                {list.map((item, i) => {

                    let type = "";

                    switch (item.type) {
                        case "email":
                            type = "mailto:";
                            break;

                        case "phone":
                            type = "tel:";
                            break;

                        case "fax":
                            type = "fax:";
                            break;

                        case "link":
                                break;   

                        default:
                            break;
                    }

                    return(
                        <li key={i}> 
                            <p> 
                                <strong>{item.text}</strong>: 
                                <a style={{marginLeft:"5px"}} href={`${type}${item.data}`}> {item.data}</a>                                    
                            </p> 
                        </li>
                    )


                })}
            </ul>
        </div>
    );

}

export {
    Contact
}