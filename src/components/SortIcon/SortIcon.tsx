import * as React from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

interface Props {
  order: 'desc' | 'asc';
}

const SortIcon = ({ order }: Props) => {
  return order === 'desc' ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />;
};

export default SortIcon;
