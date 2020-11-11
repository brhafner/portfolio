import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
// import Avatar from '@material-ui/core/Avatar';
// import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function ProjectCard(props) {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    const { title, technology, description, liveLink, gitHubURL, imageUrl } = props;

    return (
        <Card style={{ height: '500px' }}>
        <CardHeader
            style={{ height: '120px' }}
            // avatar={
            //         <Avatar src={liveLink} />

            // }
            action={
                <Link href={gitHubURL}>
                    <IconButton aria-label="settings">
                        <GitHubIcon />
                    </IconButton>
                </Link>
            }
            title={title}
            subheader={technology}
        />
            <Link href={liveLink}>
                <CardMedia style={{ height: '150px' }} image={imageUrl}/>
            </Link>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Project Overview:
                </Typography>
                <Typography variant="body2" component="p">
                   {description}
          {/* <br />
                    {'"a benevolent smile"'} */}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}