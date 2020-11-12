import React, { Fragment } from 'react';
import ProjectCard from './ProjectCard';
import { Grid, Typography } from '@material-ui/core';
import { sweProjects, productManagementProjects } from '../constants';

const Content = () => {
    
    const getProjectCard = ( projectCardObj) => {
        return (
            <Grid key={projectCardObj.title} item xs={12} sm={4}>
                <ProjectCard {...projectCardObj} />
            </Grid>
        )
    }

    return (
        <Fragment >
            <Typography style={{ fontSize: "28px", margin: "100px 0 30px 0" , fontWeight: '600'}}>Software Engineering Projects</Typography>
            <Grid container spacing={4}>
                {sweProjects.map(projectCardObj => getProjectCard(projectCardObj))}
            </Grid>
            <Typography style={{ fontSize: "24px", margin: "30px 0", fontWeight: '600' }}>Product Management Projects</Typography>
            <Grid container spacing={4}>
                {productManagementProjects.map(projectCardObj => getProjectCard(projectCardObj))}
            </Grid>
        </Fragment>
    )
}

export default Content;