import './Currency.css';
import BYN from '../../img/BYN.jpg';
import USD from '../../img/USD.jpg';
import EUR from '../../img/EUR.jpg';
import RUB from '../../img/RUB.jpg';
import UAH from '../../img/UAH.jpg';

const Currency = ({value, startValue}) => {
    let imgWay = '';

    switch (value) {
        case "BYN" :
            imgWay = BYN;
            break;
        case "USD" :
            imgWay = USD;
            break;
        case "EUR" :
            imgWay = EUR;
            break; 
        case "RUB" :
            imgWay = RUB;
            break;
        case "UAH" :
            imgWay = UAH;
            break;

    }


    return (
        <>
            <li className='currency'>
                <div className='currencyContainer'>
                    <input className='InputCurrency' id={value} value={startValue}/>
                    <div className='imgCurrency_Container'>
                        <img src={imgWay} alt={value} className="ImgCurrency"/>
                    </div>
                    {value}
                </div>
                
            </li>
        </>
        
    )
}

export default Currency;