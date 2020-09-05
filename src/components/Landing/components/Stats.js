import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Copies } from './config';
import styles from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 30,
  },
  paper: {
    width: 335,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const SimpleCard = ({ titleOne, titleTwo }) => (
  <div style={styles.statsCardContainer}>
    <h2 style={styles.statsCardTitleOne}>{titleOne}</h2>
    <h4 style={styles.statsCardTitleTwo}>{titleTwo}</h4>
  </div>
);

const Stats = () => {
  const classes = useStyles();
  const { content } = Copies.STATS;

  return (
    <Grid container className={classes.root} spacing={2} alignItems="center" justify="center">
      <Grid
	container
	item
	xs={12}
	style={styles.statsContainer}
	alignItems="center"
	justify="center"
      >
	<Grid container spacing={2} alignItems="center" justify="center" style={{ border: '0px solid black' }}>
	  {content.map(({ key, titleOne, titleTwo }) => (
	    <Grid key={key} item>
	      <Paper elevation={0} className={classes.paper}>
		<SimpleCard titleOne={titleOne} titleTwo={titleTwo} />
	      </Paper>
	    </Grid>
	  ))}
	</Grid>
      </Grid>
    </Grid>
  );
};

export default Stats;
