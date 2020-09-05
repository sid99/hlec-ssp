import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const styles = {
  list: {
    maxWidth: 360,
    width: "100%",
    // border: "1px solid black",
    padding: 0,
  },
  listItem: {
    // border: "1px solid black",
    minWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,
    height: 40,
    paddingLeft: 20,
    fontSize: 14,
  },
  listItemIcon: {
    // border: "1px solid black",
    minWidth: 20,
    // width: 10,
    height: 20,
  },
  listItemTextWrapper: {
    display: "flex",
    // border: "1px solid black",
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-even",
    padding: 0,
    fontSize: 8,
  },
  listItemText: {
    fontSize: "0.7rem",
  },
  listItemRightTextWrapper: {
    border: "0px solid black",
    paddingRight: 10,
  },
};
