import { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://opensea.io/assets?asset_contract_address=0xBE4207C1b9EC35d49dF834a36f859e067eeD8268&order_direction=ascending'
      )
      console.log(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])


  return <div className='app'>
    <Header />
    <CollectionCard
      id={0}
      name={'Bandana Punk'}
      traits={[{ 'value': 7 }]}
      image=''
    />
  </div>
}

export default App;
