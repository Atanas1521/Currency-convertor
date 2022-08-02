import {useState, useEffect} from 'react';

function App() {
  const [currency, setCurrency] = useState('usd')
  const [currencyList, setCurrencyList] = useState([])

  useEffect(() => {
    getCurrencyData()
  },[currency])

  const getCurrencyData = async () => {
    try {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      const data = await response.json()
      setCurrencyList(data.usd || data.eur || data.bgn || data.aud || 
        data.cad || data.chf || data.nzd)
    } catch(error) {
      console.log(error)
    }
  } 

  
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div>
        <select onChange={e => setCurrency(e.target.value)}>
          <option value="usd" >USD</option>
          <option value="eur" >EUR</option>
          <option value="aud" >AUD</option>
          <option value="cad" >CAD</option>
          <option value="chf" >CHF</option>
          <option value="nzd" >NZD</option>
          <option value="bgn" >BGN</option>
        </select>
      </div>

      <div>
      <h1>Group 1</h1>
      {Object.entries(currencyList)
      .filter(([key]) => key === 'eur' || key === 'bgn' || key === 'aud' ||  
      key === 'chf' || key === 'nzd' || key === 'cad' || key === 'usd')
      .map(([key, value, index]) => {
        const values = value.toFixed(1)
        return (
          <div key={index}>
          {values < 1 &&
          <div>
            {currency.toLocaleUpperCase()}-{key.toUpperCase()} : {values}
          </div>
          }
        </div>
          )
      })}
      </div>

      <div>
      <h1>Group 2</h1>
      {Object.entries(currencyList)
      .filter(([key]) => key === 'eur' || key === 'bgn' || key === 'aud' ||  
      key === 'chf' || key === 'nzd' || key === 'cad' || key === 'usd')
      .map(([key, value, index]) => {
        const values = value.toFixed(1)
        return (
          <div key={index}>
          {values >= 1 &&  values < 1.5 &&
          <div>
          {currency.toLocaleUpperCase()}-{key.toUpperCase()} : {values}
          </div>
          }
        </div>
          )
      })}
      </div>

      <div>
      <h1>Group 3</h1>
      {Object.entries(currencyList)
      .filter(([key]) => key === 'eur' || key === 'bgn' || key === 'aud' ||  
      key === 'chf' || key === 'nzd' || key === 'cad' || key === 'usd')
      .map(([key, value, index]) => {
        const values = value.toFixed(1)
        return (
          <div key={index}>
          {values >= 1.5 &&
          <div>
          {currency.toLocaleUpperCase()}-{key.toUpperCase()} : {values}
          </div>
          }
        </div>
          )
      })}
      </div>
    </div>
  );
}

export default App;
