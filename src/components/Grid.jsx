import React from 'react'

export function Row({ children }) {
  return (
    <div className='row form-group'>
      {children}
    </div>
  )
}

export function Label({
  htmlFor,
  children
}) {
  return (
    <label htmlFor={htmlFor} className="col-3 col-form-label">
      {children}
    </label>
  )
}

export const FormField = React.memo(({ children }) => {
  return (
    <div className="col-9">
      {children}
    </div>
  )
})

export const ResultRow = ({
  TrainNo,
  DepartureTime,
  ArrivalTime
}) => {
  return (
    <tr>
      <td>{TrainNo}</td>
      <td>{DepartureTime}</td>
      <td>{ArrivalTime}</td>
      <td>11:11</td>
    </tr>
  )
}

export const EmptyRow = () => (
  <tr>
    <td colSpan="4">尚無資料</td>
  </tr>
)