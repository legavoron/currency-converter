import './App.css';
import {useState, useEffect} from 'react';
import Heading from './component/heading/Heading';
import Converter from './component/converter/Converter';

function App() {
  

  const [currencyList, setCurrencyList] = useState([]);

  let byn = {
    Cur_ID: 'BYN',
    Cur_Scale: 1,
    Cur_Abbreviation: 'BYN',
    Cur_OfficialRate: 1,
    value: 1,
  };


  function onChange (event) {
    const name = event.target.id;
    const value = event.target.value;

    const currency = currencyList.filter(item => {
      if (item.Cur_ID === name) {
        return item.Cur_ID === name;
      }
    }); 

    byn.value = +(value * currency[0].Cur_OfficialRate / currency[0].Cur_Scale).toFixed(4); 
    
    const listCur = [byn, ...data];

    const changeCurrencies = listCur.map(item => {
      let num = +(name === item.Cur_Abbreviation) ? +value : +(byn.value / item.Cur_OfficialRate * item.Cur_Scale).toFixed(4);
      return ({
        Cur_Scale: item.Cur_Scale,
        Cur_ID: item.Cur_Abbreviation,
        Cur_OfficialRate: item.Cur_OfficialRate,
        value: num
      });
    })

    setCurrencyList([...changeCurrencies]);
  }
 

  const [data, setData] = useState([]);

  useEffect( () => {
      const fetchData = async () => {
        const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
        const res = await response.json();

        const currencies = res.filter(elem => {
          return (
            elem.Cur_Abbreviation === 'USD' ||
            elem.Cur_Abbreviation === 'RUB' ||
            elem.Cur_Abbreviation === 'EUR' ||
            elem.Cur_Abbreviation === 'UAH'
          )
        });

        setData([...currencies]); 
      };
      
    fetchData()
      .catch(console.error)

      console.log(data);


      const currencies = createCurrencies();
      setCurrencyList([...currencies]);    
    }, []);


    function createCurrencies() {
      const list = [byn, ...data];
  
      // в list попадает только byn, data почему-то пустая
  
      const changeCurrencies = list.map(item => {
        return ({
          Cur_Scale: item.Cur_Scale,
          Cur_ID: item.Cur_Abbreviation,
          Cur_OfficialRate: item.Cur_OfficialRate,
          value: +(byn.value / item.Cur_OfficialRate * item.Cur_Scale).toFixed(4)
        })
      })
      return [...changeCurrencies];
    }



  return (
    <div className="App">
      <Heading/>
      <Converter currencies={currencyList} onChange={onChange}/>
    </div>
  );
}

export default App;
