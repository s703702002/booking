import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const TimeSelect = (props) => (
  <Select {...props}>
    <MenuItem value="06:00">06:00</MenuItem>
    <MenuItem value="07:00">07:00</MenuItem>
    <MenuItem value="08:00">08:00</MenuItem>
    <MenuItem value="09:00">09:00</MenuItem>
    <MenuItem value="10:00">10:00</MenuItem>
    <MenuItem value="11:00">11:00</MenuItem>
    <MenuItem value="12:00">12:00</MenuItem>
    <MenuItem value="13:00">13:00</MenuItem>
    <MenuItem value="14:00">14:00</MenuItem>
    <MenuItem value="15:00">15:00</MenuItem>
    <MenuItem value="16:00">16:00</MenuItem>
    <MenuItem value="17:00">17:00</MenuItem>
    <MenuItem value="18:00">18:00</MenuItem>
    <MenuItem value="19:00">19:00</MenuItem>
    <MenuItem value="20:00">20:00</MenuItem>
    <MenuItem value="21:00">21:00</MenuItem>
    <MenuItem value="22:00">22:00</MenuItem>
    <MenuItem value="23:00">23:00</MenuItem>
    <MenuItem value="24:00">24:00</MenuItem>
  </Select>
);

const Selector = ({ options, ...props }) => {
  return (
    <Select {...props}>
      {options.length > 0 ? (
        options.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.Zh_tw + o.En}
          </MenuItem>
        ))
      ) : (
        <MenuItem value="">無資料</MenuItem>
      )}
    </Select>
  );
};

export default Selector;
