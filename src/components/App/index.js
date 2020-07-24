import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Menu from './Menu';


const useStyles = makeStyles((theme) => ({
    MenuItems:{
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
        magin: 0
    }
  }));

const Content = () => {
    const classes = useStyles();
    return(
        <div>
            <div>
                <AppBar color="default">
                    <Toolbar>
                        <div className={classes.MenuItems}>
                           <Menu />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            
        </div>
    );
}

export default Content;