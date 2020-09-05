import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MainCard from './MainCard';
import { Copies } from './config';

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
  title, body, iconName, testimonials,
}) => (
  <MainCard
    title={title}
    body={body}
    iconName={iconName}
    testimonials={testimonials}
    paddingBottom="10"
    paddingTop="10"
    paddingLeft="10"
    paddingRight="10"
  />
);

export default function SpacingGrid() {
  const classes = useStyles();
  const { content } = Copies.TESTIMONIALS;

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {content.map(({
            key, testimonials, iconName, title, body,
          }) => (
            <Grid key={key} item>
	      <Paper elevation={0} className={classes.paper}>
		<Card iconName={iconName} testimonials={testimonials} title={title} body={body} />
	      </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
