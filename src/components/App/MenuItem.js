import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import Styles from './MenuItem.module.css'


const MenuItem = props => {

    return (
        <div>
            <IconButton>
                <Grid container direction={props.direction}  alignItems="center">
                    <img className={Styles.photo} src={props.icon}  alt="Content" />
                    <Typography >{props.menuItem}</Typography>
                </Grid>
            </IconButton>
        </div>
            
    );
}

export default MenuItem;