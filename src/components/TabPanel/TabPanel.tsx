import * as React from 'react';
import Box from '@material-ui/core/Box';

interface Props {
  value: number;
  index: number;
  children: any;
}

function TabPanel({ children, value, index, ...other }: Props) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box pt={2}>{children}</Box>}
    </div>
  );
}

export default TabPanel;
