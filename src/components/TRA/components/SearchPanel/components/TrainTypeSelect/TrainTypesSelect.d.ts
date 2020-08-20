import { AutocompleteProps } from '@material-ui/lab/Autocomplete';

interface TrainTypeSelectProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>
  extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    'renderInput'
  > {
  myProps?: string;
}

export interface option {
  text: string;
  value: string;
}

export default TrainTypeSelectProps;
