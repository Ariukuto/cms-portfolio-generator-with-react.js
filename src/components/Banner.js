import img from '../imgs/placeholder.png';

export function Banner(props) {
    return (
       <div className='Banner'>
            <picture>
                <source media="(orientation:portrait)" srcSet={img} />
                <img src={img} alt="banner" />
            </picture>
       </div> 
    );        
}