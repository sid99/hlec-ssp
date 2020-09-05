import {makeStyles} from "@material-ui/core/styles";

export const statusButtonsStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  base: {
    height: 30,
    width: 120,
    fontSize: 16,
    padding: 0,
    margin: 0,
    fontWeight: 800,
  },
  base2: {
    height: 30,
    width: 120,
    fontSize: 8,
    padding: 0,
    margin: 0,
    fontWeight: 800,
  },
  cancel: {
    height: 18,
    width: 100,
    fontSize: 10,
    color: "red",
    borderColor: "red",
    padding: 0,
    margin: 0,
    fontWeight: 800,
  },
  cancelTwo: {
    height: 30,
    width: 100,
    fontSize: 16,
    color: "red",
    borderColor: "red",
    padding: 0,
    margin: 0,
    fontWeight: "bold",
    fontStyle: "bold",
  },
  payNow: {
    height: 30,
    width: 100,
    fontSize: 16,
    color: "green",
    borderColor: "green",
    padding: 0,
    margin: 0,
    fontWeight: "bold",
    fontStyle: "bold",
  },
}));

export const dividerStyle = {
  width: "100%",
  padding: 0,
  margin: 0,
  marginBottom: 2,
  marginTop: 2,
};
