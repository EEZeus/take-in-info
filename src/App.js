import './App.css';
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { Actions } from './Store/Redux';
import MainPage from './Pages/MainPage';
import DetailsPage from './Pages/DetailsPage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const dispatch = useDispatch()
  let [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        dispatch(Actions.fetchState({ data }))
      }).catch(error => {
        console.log("Request Failed ! Try again.")
        setErrorMessage(<h2>Failed To Fetch Data ! Please Try Again.</h2>)
      })
  }, [dispatch])

  return (
    <React.Fragment>
      <Router>
      <Routes>
      <Route path="/" element={ <MainPage errorMessage={errorMessage}/> } />
      <Route path="/details" element={ <DetailsPage/> } />
      </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
