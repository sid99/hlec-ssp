export default {
  stepper: {
    border: "1px hidden white",
    padding: 0,
    paddingTop: 20,
  },
  step: {
    border: "1px hidden white",
    // padding: 0,
  },
  bottomButton: {
    width: 80,
  },
  selectCatalogItems: {
    list: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // maxWidth: 360,
      width: "100%",
      alignItems: "center",
      alignContent: "center",
    },
    listItem: {
      minWidth: 360,
      border: "1px hidden red",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingRight: 0,
      boxShadow: "1px 1px 1px 1px #9E9E9E",
    },
    listItemIcon: {
      border: "0px solid white",
      minWidth: 20,
    },
    listItemTextWrapper: {
      display: "flex",
      border: "0px solid black",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-even",
      padding: 0,
      // fontSize: 8,
    },
    listItemText: {
      fontSize: "0.7rem",
    },
    listItemRightTextWrapper: {
      border: "0px solid black",
      paddingRight: 10,
    },
  },
};
