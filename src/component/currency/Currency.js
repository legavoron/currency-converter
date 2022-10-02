import './Currency.css';
import { useState } from 'react';
import BYN from '../../img/BYN.jpg';
import USD from '../../img/USD.jpg';
import EUR from '../../img/EUR.jpg';
import RUB from '../../img/RUB.jpg';
import UAH from '../../img/UAH.jpg';

const Currency = ({name, rate, value, scale, onChange}) => {

    let imgWay = '';

    switch (name) {
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

    const [curValue, setCurValue] = useState({
        id: '',
        value: 1,
    });

    
    return (
        <>
            <li className='currency'>
                <div className='currencyContainer'>
                    <input className='InputCurrency' 
                    id={name} 
                    defaultValue={value} 
                    onChange={onChange}/>
                    <div className='imgCurrency_Container'>
                        <img src={imgWay} alt={value} className="ImgCurrency"/>
                    </div>
                    {name}
                </div>
            </li>
        </>
        
    )
}

export default Currency;