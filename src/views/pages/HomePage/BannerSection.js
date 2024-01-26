import React from 'react';
import {Container, Box, makeStyles, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    bannerMainBox:{
        position:"relative",
        top:"-5rem"
    },
    bannerTextBox:{
        position:"absolute",
        top:"66%",
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        padding:"0px 40px",
        [theme.breakpoints.down('xs')]: {
            padding:"0px 10px",
          },
    }
  }));

function BannerSection() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerMainBox}>
        <Container maxWidth="md" style={{position:"relative"}}>
        <img src="../images/home-banner-image.png" alt="" style={{ width: "100%" }} />
        <Box className={classes.bannerTextBox}>
            <Box>
            <Typography variant="h3">Welcome to <br/> Andor Fi</Typography>
            </Box>
            <Box>
            <Typography variant="body1" style={{maxWidth:"155px"}}>Trading made simpler, faster and accessible for everyone.</Typography>
            </Box>
        </Box>
        </Container>
    </Box>
  )
}

export default BannerSection