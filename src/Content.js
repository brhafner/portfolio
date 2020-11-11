import React from 'react';
import ProjectCard from './ProjectCard';
import { Grid } from '@material-ui/core';
import ProjectList from './constants';

const Content = () => {
    
    const getProjectCard = ( projectCardObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <ProjectCard {...projectCardObj} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={4}>
            
            {ProjectList.map(projectCardObj => getProjectCard(projectCardObj))}
                {/* <ProjectCard 
                    title="Hamilton Beach Flexbrew"
                    technology="Lorem Ipsum"
                    avatarSrc="https://images-na.ssl-images-amazon.com/images/I/71aZDzTQJsL._AC_SX679_.jpg"
                    imgSrc="https://images-na.ssl-images-amazon.com/images/I/71PCi0jcTjL._AC_SX679_.jpg"
                    description="Lorem ipsum this is a great coffee maker and it's only so much bla bla"
                /> */}
        </Grid>
    )
}

export default Content;