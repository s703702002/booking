import React, { useState, useEffect } from 'react';
import './App.css';
import Select from './Select'
import { formatDate } from './utils'

// API spec: https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_DailyTimetable

const API_BASE = 'https://ptx.transportdata.tw/MOTC'
const API_TODAY = '/v2/Rail/THSR/DailyTimetable/Today' // GET 取得當天所有車次的時刻表資料
const API_ODFARE = '/v2/Rail/THSR/ODFare' // GET 取得票價資料

function App() {
  const [updateTime, setUpdateTime] = useState('')
  const [stationOptions, setStationOptions] = useState([])
  const [date, setDate] = useState(formatDate(Date.now()))

  useEffect(() => {
    fetch(API_BASE + API_ODFARE, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        const stations = {}
        console.log('data', data)
        data.forEach(element => {
          const stationsId = element.OriginStationID
          if (!stations[stationsId]) {
            stations[stationsId] = element.OriginStationName
          }
        });
        setStationOptions(
          Object.entries(stations)
            .map(e => ({
              value: e[0],
              ...e[1]
            }))
        )
        setUpdateTime(data[0].UpdateTime)
      })
      .catch(err => {
        console.log('error', err)
      })
  }, [])
  return (
    <div className="App">
      <div className='search_panel'>
        <div>
          <label htmlFor="trip-start">日期:</label>
          <input
            type="date"
            id="trip-start"
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="OrginStation">起站:</label>
          <Select name="OrginStation" id="OrginStation" options={stationOptions}/>
        </div>
        <div>
          <label htmlFor="DestinationStation">迄站:</label>
          <Select name="DestinationStation" id="DestinationStation" options={stationOptions}/>
        </div>
      </div>
      <footer>
        <p>更新時間: {updateTime}</p>
      </footer>
    </div>
  )
}

export default App;
