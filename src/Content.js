import React, { Fragment } from 'react';
import ProjectCard from './ProjectCard';
import { Grid, Typography } from '@material-ui/core';
import { sweProjects, productManagementProjects } from './constants';

const Content = () => {
    
    const getProjectCard = ( projectCardObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <ProjectCard {...projectCardObj} />
            </Grid>
        )
    }

    return (
        <Fragment >
            <Typography >Software Engineering Projects</Typography>
            <Grid container spacing={4}>
                {sweProjects.map(projectCardObj => getProjectCard(projectCardObj))}
            </Grid>
            <Typography >Product Management Projects</Typography>
            <Grid container spacing={4}>
                {productManagementProjects.map(projectCardObj => getProjectCard(projectCardObj))}
            </Grid>
        </Fragment>
    )
}

export default Content;