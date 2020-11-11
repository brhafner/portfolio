import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/styles';
import Dropdown from './Dropdown';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}))

const Header = () => {
    const classes = useStyles();

   return (
       <AppBar position="static">
           <Toolbar>
               <Typography className={classes.typographyStyles}>
                   Ben Hafner's Portfolio
                </Typography>
               {/* <PersonIcon /> */}
               <Dropdown />
           </Toolbar>
       </AppBar>
   );
};

export default Header;