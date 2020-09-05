import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Copies } from './config';
import MainCard from './SimpleCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 335,
    // border: '1px solid black',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Card = ({
  testimonials, iconName, title, body, body1, body2, body3,
}) => (
  <MainCard
    testimonials={testimonials}
    title={title}
    body={body}
    iconName={iconName}
    body1={body1}
    body2={body2}
    body3={body3}
    paddingBottom="10"
    paddingTop="10"
    paddingLeft="10"
    paddingRight="10"
  />
);

const HowItWorksGrid = () => {
  const classes = useStyles();
  const { content } = Copies.HOW_IT_WORKS;

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {content.map(({
            key, testimonials, iconName, title, body, body1, body2, body3
	  }) => {
	    return (
            <Grid key={key} item>
	      <Paper elevation={0} className={classes.paper}>
		<Card
		  iconName={iconName}
		  testimonials={testimonials}
		  title={title}
		  body={body}
		  body1={body1}
		  body2={body2}
		  body3={body3}
		/>
	      </Paper>
            </Grid>
          )})}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowItWorksGrid;
