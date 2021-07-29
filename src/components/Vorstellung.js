import img from '../imgs/placeholder.png';

export function Vorstellung(props) {
    return(
        <div className="Vorstellung">
            <div className='row'>
                <div className='col-md d-flex justify-content-center align-items-center'>
                    <img src={img} alt='' />
                </div>
                <div className='col-md d-flex justify-content-center'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                </div>
            </div>
        </div>
    );
}   