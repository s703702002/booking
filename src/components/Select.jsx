import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const StyledSelect = withStyles({
  root: {
    textAlign: "left"
  }
})(Select);

const Selector = ({ options, ...props }) => {
  return (
    <StyledSelect {...props}>
      {options.length > 0 ? (
        options.map(o => (
          <MenuItem key={o.value} value={o.value}>
            {o.Zh_tw + o.En}
          </MenuItem>
        ))
      ) : (
        <MenuItem value="">無資料</MenuItem>
      )}
    </StyledSelect>
  );
};

export const TimeSelect = props => (
  <StyledSelect {...props}>
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
  </StyledSelect>
);

export default Selector;
