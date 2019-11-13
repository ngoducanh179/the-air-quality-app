import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import GetAirQuality from './components/GetAirQuality';
function App() {
  const [aq, SetAq] = useState({})
  const GetAQI = async (text) => {
    const res = await axios.get(`https://api.waqi.info/feed/${text}/?token=45e0be1be75b180b245bdfd8d619bb686a32447f`)
    SetAq(res.data)
    console.log(res.data)
  }


  return (
    <div className="App">
      <GetAirQuality aq={aq} GetAQI={GetAQI} />
    </div>
  );


}

export default App;
