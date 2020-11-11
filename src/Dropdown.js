import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Link from '@material-ui/core/Link';
import * as Resume from './assets/Resume - Ben Hafner.pdf'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    }
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                // variant="contained"
                color="secondary"
                onClick={handleClick}
                hover="pointer"
            >
                Contact Me
      </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link
                    href="https://greet-up-seeds.s3-us-west-1.amazonaws.com/Resume+-+Ben+Hafner.pdf"
                    target="_blank"
                    rel="noopener"
                    // download
                >
                    <StyledMenuItem >
                        <ListItemIcon>
                            <FingerprintIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Resume" />
                    </StyledMenuItem>
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/brhafner/" 
                    target="_blank" 
                    rel="noopener" 
                    color="inherit">
                    <StyledMenuItem>
                        <ListItemIcon>
                            <LinkedInIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                    </StyledMenuItem>
                </Link>
                <Link 
                    href="https://github.com/brhafner/" 
                    target="_blank"
                    rel="noopener"                     
                    color="inherit" >
                    <StyledMenuItem>
                        <ListItemIcon>
                            <GitHubIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </StyledMenuItem>
                </Link>
                <StyledMenuItem key="Email" component="a" href="mailto:brhafner@gmail.com">
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Email Me" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
