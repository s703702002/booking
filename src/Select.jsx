import React from 'react'

const Select = React.memo(({
  options,
  ...props
}) => {
  return (
    <select {...props}>
      {
        options.length > 0 ?
          options.map(e => (
            <option key={e.value} value={e.value}>{e.Zh_tw + e.En}</option>
          )) : <option value="">請選擇</option>
      }
    </select>
  )
})

export default Select