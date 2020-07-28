import React from 'react';
import { Paper, makeStyles } from '@material-ui/core'
import Menu from './Menu'

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '130px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        borderRadius: 0
        
    }
  }));


const SideBar = () =>{
    const classes = useStyles();

    return (
        <Paper elevation= {14} className = {classes.paper}>
            <Menu />
        </Paper>
    );
}

export default SideBar;