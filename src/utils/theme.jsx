import {createTheme} from '@material-ui/core';
import {blue, blueGrey} from '@material-ui/core/colors';


const theme = createTheme({
    palette: {
        type: "dark",
      primary: {
        main: blue[500],
      },
      secondary: {
        main: blueGrey[500],
        contrastText: blue[200]
      },
      primaryLight: {
          main: blue[200]
      }
    },
  });

  export default theme;