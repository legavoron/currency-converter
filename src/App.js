import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState([]);
 
  useEffect( () => {
      const fetchData = async () => {
        const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
        const data = await response.json();
        console.log(data);
        setData(data);          
      };

    fetchData();
    }, []
  ) ;

 

  

  return (
    <div className="App">
      
      
    



    </div>
  );
}

export default App;
