import React, { useState, useEffect } from 'react';
import './App.css';
import Select from './Select'
import { Row } from './Grid'
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
      <header>
        <h1>高鐵查詢系統</h1>
      </header>
      <div className='search_panel container-fluid'>
        <Row>
          <label htmlFor="trip-start" className="col-1 col-form-label">日期:</label>
          <div className="col-11">
            <input
              class="form-control"
              type="date"
              id="trip-start"
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
            />
          </div>
        </Row>
        <Row>
          <label htmlFor="OrginStation" className="col-1 col-form-label">起站:</label>
          <div className="col-11">
            <Select
              class="form-control"
              name="OrginStation"
              id="OrginStation"
              options={stationOptions}
            />
          </div>
        </Row>
        <Row>
          <label htmlFor="DestinationStation" className="col-1 col-form-label">迄站:</label>
          <div className="col-11">
            <Select 
              class="form-control" 
              name="DestinationStation"
              id="DestinationStation"
              options={stationOptions}
            />
          </div>
        </Row>  
        <button type="button" className="btn btn-primary btn-lg btn-block">查詢</button>
      </div>
      <div>
        <table className="result_table">
          <thead>
            <tr>
              <td>車次</td>
              <td>起站</td>
              <td>迄站</td>
              <td>發車時間</td>
              <td>到達時間</td>
              <td>總時程</td>
              <td>票價資訊</td>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
      <footer>
        <p>更新時間: {updateTime}</p>
      </footer>
    </div>
  )
}

export default App;
