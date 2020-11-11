import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/styles';
import Dropdown from './Dropdown';

const useStyles = makeStyles(() => ({
    appBarBackground: {
        background: 'linear-gradient(45deg, #2196F3 60%, #21CBF3 100%)',
        marginBottom: '40px'
    },
    typographyStyles: {
        flex: 1,
        fontSize: '20px'
    }
}))

const Header = () => {
    const classes = useStyles();

   return (
       <AppBar position="static" className={classes.appBarBackground}>
           <Toolbar>
               <Typography className={classes.typographyStyles}>
                   Ben Hafner
                </Typography>
               {/* <PersonIcon /> */}
               <Dropdown />
           </Toolbar>
       </AppBar>
   );
};

export default Header;