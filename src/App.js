import React from "react";
import { Grid, ThemeProvider, createMuiTheme } from '@material-ui/core'
import Header from './components/Header'
import Content from "./components/Content";
import Footer from "./components/Footer";
import { grey, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[600]
    },
    secondary: {
      main: red[500]
    }, 
    background: {
      paper: grey[200],
      default: grey[900]
    }
  }
});

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item >
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={1} md={1} />
        <Grid item xs={10} sm={10} md={10}>
          <Content />
        </Grid>
        <Grid item xs={1} sm={1} md={1} />
      </Grid>
      <Grid item >
        <Footer />
      </Grid>
    </Grid>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
