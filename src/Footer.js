import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    appBarBackground: {
        background: 'black',
        marginTop: '75px'
    },
    typographyStyles: {
        flex: 1,
        fontSize: '16px'
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBarBackground}>
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    © 2020 Ben Hafner
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;