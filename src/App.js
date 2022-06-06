import './App.css';
import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  //creating IP state
  const [ip, setIP] = useState('');


  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  return (
    <div className="App">
      <h2>My IP Address is</h2>
      <button type="button" class="btn btn-primary">Check Ip Address</button>
      <h4>{ip}</h4>
    </div>
  );
}

export default App;