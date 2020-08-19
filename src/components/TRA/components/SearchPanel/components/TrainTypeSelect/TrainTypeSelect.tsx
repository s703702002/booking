import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete, { AutocompleteProps } from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import option from './TrainTypesSelect';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function TrainTypeSelect(props: AutocompleteProps<option, true, true, true>) {
  return (
    <Autocomplete
      {...props}
      multiple
      disableCloseOnSelect
      getOptionLabel={(option) => option.text}
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
    />
  );
}

export default TrainTypeSelect;
