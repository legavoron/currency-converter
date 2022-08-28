import './CurrencyList.css';
import Currency from '../currency/Currency';


const CurrencyList = ({data, BynValue}) => {
    
    const listItems = data.map((item) => {
        return (
            <Currency key={item.Cur_ID} value={item.Cur_Abbreviation}/>
        )
    })


    return (
        <div className='currencyList'>
            <ul className='listItems'>
                <Currency key="BYN" value="BYN" startValue={BynValue}/>
                {listItems}
            </ul>
        </div>
    )
}

export default CurrencyList;