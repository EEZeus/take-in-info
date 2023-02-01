import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { fetchAction } from './Store/Redux';

function App() {

  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const dispatch = useDispatch()
 
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchAction({data}))
      })
  }, [])

  return (
    <div></div>
  );
}

export default App;
