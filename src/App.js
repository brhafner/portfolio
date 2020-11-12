import React from "react";
import { Grid } from '@material-ui/core'
import Header from './Header'
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  return (
    <Grid container direction="column">
        <Grid item >
            <Header />
        </Grid>
        <Grid item container>
            <Grid item xs={false} sm={1} md={1}/>
              <Grid item xs={12} sm={10} md={10}>
                  <Content />
                </Grid>
            <Grid item xs={false} sm={1} md={1} />
        </Grid>
        <Grid item >
          <Footer />
        </Grid>
    </Grid>
  );
};

export default App;
