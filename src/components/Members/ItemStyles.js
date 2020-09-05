import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    width: "100%",
    // border: "1px solid black",
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expanded: {
    // border: "1px solid black",
    "&$expanded": {
      margin: "0 0",
    },
  },
  description: {
    // border: "1px solid black",
  },
  summary: {
    "&$expanded": {
      // margin: "0 0",
      // padding: "0 0",
    },
  },
}));
