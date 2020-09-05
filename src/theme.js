import {createMuiTheme} from "@material-ui/core/styles";

export const primaryColor = "#42A5F5";
export const secondaryColor = "#F59242";
export const primaryFontFamily = "Nunito";

export default createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [primaryFontFamily, "sans-serif"].join(","),
  },
});
