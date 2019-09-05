import React, { useState, useEffect } from 'react';
import './App.css';
import Select from './Select'
import { Row, Label, FormField } from './Grid'
import { formatDate } from './utils'
import { Desc, Asc, Exchange } from './Icons'

// API spec: https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_DailyTimetable
const API_BASE = 'https://ptx.transportdata.tw/MOTC'
const API_TODAY = '/v2/Rail/THSR/DailyTimetable/Today' // GET 取得當天所有車次的時刻表資料
const API_ODFARE = '/v2/Rail/THSR/ODFare' // GET 取得票價資料

function App() {
  const [updateTime, setUpdateTime] = useState('')
  const [stationOptions, setStationOptions] = useState([])
  const [date, setDate] = useState(formatDate(Date.now()))
  const [sortByDeparture, setDeaprtureState] = useState('desc')
  const [sortByArrive, setArriveState] = useState('desc')

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
      <div className='search_panel container'>
        <Row>
          <Label htmlFor="trip-start">日期:</Label>
          <FormField>
            <input
              className="form-control"
              type="date"
              id="trip-start"
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
            />
          </FormField>
        </Row>
        <Row>
          <Label htmlFor="OrginStation">起站:</Label>
          <FormField>
            <Select
              className="form-control"
              name="OrginStation"
              id="OrginStation"
              options={stationOptions}
            />
          </FormField>
        </Row>
        <div className="row justify-content-center form-group">
          <button className="col-2">
            <Exchange />
          </button>
        </div>
        <Row>
          <Label htmlFor="DestinationStation">迄站:</Label>
          <FormField>
            <Select 
              className="form-control" 
              name="DestinationStation"
              id="DestinationStation"
              options={stationOptions}
            />
          </FormField>
        </Row>  
        <button type="button" className="btn btn-primary btn-lg btn-block">查詢</button>
      </div>
      <div className="container">
        <table className="result_table">
          <thead>
            <tr>
              <td>車次</td>
              <td>起迄站</td>
              <td>
                發車
                { sortByDeparture === 'desc' ? <Desc /> : <Asc />}
              </td>
              <td>
                到達
                { sortByArrive === 'desc' ? <Desc /> : <Asc />}
              </td>
              <td>總時程</td>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
        <div>
          <h3>票價資訊</h3>
        </div>
      </div>
      <footer>
        <p>更新時間: {updateTime}</p>
      </footer>
    </div>
  )
}

export default App;
