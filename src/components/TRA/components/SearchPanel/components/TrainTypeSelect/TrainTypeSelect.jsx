import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const types = [
  { text: '不限', value: '0' },
  { text: '太魯閣', value: '1' },
  { text: '普悠瑪', value: '2' },
  { text: '自強', value: '3' },
  { text: '莒光', value: '4' },
  { text: '復興', value: '5' },
  { text: '區間', value: '6' },
  { text: '普快', value: '7' }
];

const TrainTypeSelect = props => {
  return (
    <Autocomplete
      multiple
      options={types}
      disableCloseOnSelect
      getOptionLabel={option => option.text}
      defaultValue={[types[0]]}
      limitTags={2}
      renderOption={(option, { selected }) => (
        <>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.text}
        </>
      )}
      renderInput={params => (
        <TextField {...params} variant="outlined" label="列車種類" />
      )}
      {...props}
    />
  );
};

export default TrainTypeSelect;
