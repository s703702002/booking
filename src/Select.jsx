import React from 'react'

const Select = ({
  id,
  name,
  options,
  ...props
}) => {
  return (
    <select name={name} id={id} {...props}>
      {
        options.map(e => (
          <option key={e.value} value={e.value}>{e.Zh_tw + e.En}</option>
        ))
      }
    </select>
  )
}

export default Select