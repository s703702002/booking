import React from "react";

const Select = React.memo(
  React.forwardRef(({ options, ...props }, ref) => {
    return (
      <select {...props} ref={ref}>
        {options.length > 0 ? (
          options.map(e => (
            <option key={e.value} value={e.value}>
              {e.Zh_tw + e.En}
            </option>
          ))
        ) : (
          <option value="">請選擇</option>
        )}
      </select>
    );
  })
);

export const TimeSelect = ({ options, ...props }) => (
  <select {...props}>
    <option value="06:00">06:00</option>
    <option value="07:00">07:00</option>
    <option value="08:00">08:00</option>
    <option value="09:00">09:00</option>
    <option value="10:00">10:00</option>
    <option value="11:00">11:00</option>
    <option value="12:00">12:00</option>
    <option value="13:00">13:00</option>
    <option value="14:00">14:00</option>
    <option value="15:00">15:00</option>
    <option value="16:00">16:00</option>
    <option value="17:00">17:00</option>
    <option value="18:00">18:00</option>
    <option value="19:00">19:00</option>
    <option value="20:00">20:00</option>
    <option value="21:00">21:00</option>
    <option value="22:00">22:00</option>
    <option value="23:00">23:00</option>
    <option value="24:00">24:00</option>
  </select>
);

export default Select;
