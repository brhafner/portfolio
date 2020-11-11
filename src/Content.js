import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';
import CoffeeMakerList from './constants';

const Content = () => {
    
    const getCoffeeMakerCard = ( coffeeMakerObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCard {...coffeeMakerObj} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={4}>
            
                {CoffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
                {/* <CoffeeCard 
                    title="Hamilton Beach Flexbrew"
                    subtitle="$89.99"
                    avatarSrc="https://images-na.ssl-images-amazon.com/images/I/71aZDzTQJsL._AC_SX679_.jpg"
                    imgSrc="https://images-na.ssl-images-amazon.com/images/I/71PCi0jcTjL._AC_SX679_.jpg"
                    description="Lorem ipsum this is a great coffee maker and it's only so much bla bla"
                /> */}
        </Grid>
    )
}

export default Content;