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