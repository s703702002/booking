import React, { Suspense } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import DailyTimeTable from "./components/DailyTimeTable";
import TrainTodayInfo from "./components/TrainTodayInfo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Suspense fallback={<div>Get train time table...</div>}>
            <DailyTimeTable trainNo={isOpen && trainNo} />
          </Suspense>
        </Grid>
        <Grid item xs={6}>
          <Suspense fallback={<div>Get train today info...</div>}>
            <TrainTodayInfo trainNo={isOpen && trainNo} />
          </Suspense>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default TrainInfoDialog;
