import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 150,
    height: 175,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
    // color: "#CAE4F1",
    color: "#3399FF",
  },
});

const styles = {
  card: {
    width: 175,
    height: 175,
  },
};

export default function CommunityCard({item, handleClick}) {
  const classes = useStyles();

  return (
    <div>
    <Card style={styles.card} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h2">
	  {item.name}
        </Typography>
	<Divider />
	<div style={{height: 10}} />
	<Typography
	  className={classes.pos}
	  color="textSecondary"
	  onClick={() => handleClick("upcoming")}
	>
          Upcoming: 12
        </Typography>
	<Typography
	  className={classes.pos}
	  color="textSecondary"
	  onClick={() => handleClick("next")}
	>
          Next: 10
        </Typography>
      </CardContent>
    </Card>
  </div>
  );
}
