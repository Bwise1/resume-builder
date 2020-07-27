import React from 'react';
import hero from '../images/hero.svg';
import { Typography, Container, Button } from '@material-ui/core';
import Typing from 'react-typing-animation';
import Styles from '../landing/Home.module.css';
import TopNavBar from './TopNavBar';

const Header = ()=>{
    const handleClick = () => {
        console.log("attempting Login");
      };
    return(
        <React.Fragment>
            <Container >
                <TopNavBar />
                <div className={Styles.header} >
                    <img alt="" src={hero} />
                    <div>
                        <Typing>
                            <h1>Want to build a job landing <br/> Curriculum Vitae?</h1>
                        </Typing>
                        <Typography varient="h5" align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus congue dignissim. Vestibulum et ex nisl. Vestibulum eu luctus nisi. Fusce sit amet vehicula nisl. </Typography>
                        <Button variant="contained" color="primary" onClick={handleClick}>Login</Button>
                      
                    </div>
                </div >
            </Container>
        </React.Fragment>
    );
}

export default Header;