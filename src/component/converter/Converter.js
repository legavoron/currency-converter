import './Converter.css';
import CurrencyList from '../CurrencyList/CurrencyList';

const Converter = ({data, BynValue}) => {
    
   


    return (
        <div className="converter">
            <CurrencyList data={data} BynValue={BynValue}/>
        </div>
    )
}

export default Converter;