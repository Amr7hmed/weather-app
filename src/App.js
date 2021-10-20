import React, { useState } from 'react';
import './App.css';
import Searchbox from './Component/Searchbox';
import Locationdata from './Component/Locationdata';

const api = {
  key:"8c369a277045f41f1582cebc706dbedb",
  base: "https://api.openweathermap.org/data/2.5/"
  }
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <section>
        <Searchbox setQuery={setQuery} query={query} search={search}/>
        {(typeof weather.main != "undefined") ? (
          <Locationdata weather={weather} dateBuilder={dateBuilder}/>
        ) : ('')}
      </section>
    </div>
  );
}

export default App;