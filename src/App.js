import './App.css';
import {useState, useEffect} from 'react';
import Heading from './component/heading/Heading';
import Converter from './component/converter/Converter';

function App() {
  const [BynValue, setBynValue] = useState(1);
  const [UsdValue, setUsdValue] = useState('');
  const [EurValue, setEurValue] = useState('');
  const [RubValue, setRubrValue] = useState('');
  const [UahValue, setUhValue] = useState('');
  
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
        })
        setData(currencies);          
      };

    fetchData()
    }, []);


  return (
    <div className="App">
      <Heading/>
      <Converter data={data} BynValue={BynValue}/>




    </div>
  );
}

export default App;
