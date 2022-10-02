import './Converter.css';
import CurrencyList from '../CurrencyList/CurrencyList';

const Converter = ({currencies, onChange, startCurrency}) => {
    
   


    return (
        <div className="converter">
            <CurrencyList currencies={currencies} onChange={onChange} startCurrency={startCurrency}/>
        </div>
    )
}

export default Converter;