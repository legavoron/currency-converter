import './CurrencyList.css';
import Currency from '../currency/Currency';


const CurrencyList = ({currencies, onChange}) => {
    const listItems = currencies.map((item) => {
        return (
            <Currency key={item.Cur_ID} name={item.Cur_ID} scale={item.Cur_Scale} rate={item.Cur_OfficialRate} value={item.value} onChange={onChange} />
        )
    })


    return (
        <div className='currencyList'>
            <ul className='listItems'>
                {listItems}
            </ul>
        </div>
    )
}

export default CurrencyList;