import React, { Suspense } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import DailyTimeTable from './components/DailyTimeTable';
import TrainTodayInfo from './components/TrainTodayInfo';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'static'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const TrainInfoDialog = ({ isOpen, toggle, trainNo }) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={toggle}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggle}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            車號 - {trainNo}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <Suspense fallback={<div>Get train today info...</div>}>
          <TrainTodayInfo trainNo={isOpen && trainNo} />
        </Suspense>
        <Suspense fallback={<div>Get train time table...</div>}>
          <DailyTimeTable trainNo={isOpen && trainNo} />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
};

export default TrainInfoDialog;
