import React from 'react';
import {Grid} from '@material-ui/core';
import MenuItem from './MenuItem';
import Content from '../../assets/images/content.png';
import Design from '../../assets/images//design.png';
import Check from '../../assets/images/check.png';
import Settings from '../../assets/images/settings.jpg';
import Log from '../../assets/images/login.png';

const Menu = () =>{
    return(
        <Grid container  justify="space-between">
            <MenuItem direction= "column" icon={Content} menuItem="Content"/>
            <MenuItem direction= "column" icon={Design} menuItem="Design" />
            <MenuItem direction= "column" icon={Check} menuItem="Check"/>
            <MenuItem direction= "column" icon={Settings} menuItem="Settings"/>
            <MenuItem direction= "column" icon={Log} menuItem="Login"/>
        </Grid >
    );
}

export default Menu;