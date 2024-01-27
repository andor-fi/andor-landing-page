import React from 'react';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';
// import { FaDiamond } from 'react-icons/fa';
import Marquee from "react-fast-marquee";


const useStyles = makeStyles((theme) => ({
  marquee: {
    margin:"40px 0px 40px 0px",
    border: '1px solid rgb(235 238 255 / 15%)',
    borderRadius: '999px', // Use a high value for rounded-full effect
    display: 'flex',
    overflowX: 'auto',
   
  },
  textElement: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"10px",
    "& h1": {
        fontSize: "36px",
        fontWeight: "500",
        "color": "#FFFFFF"
    },
    "& img": {
       width:"20px",
       height:"20px",
       marginRight:"20px"

    },
  },
}));
const textArray = [
    'MULTI-PLATFORM',
    'MULTI-LINGUAL',
    'MULTI-CHAIN',
    'MULTI-PLATFORM',
    'MULTI-LINGUAL',
    'MULTI-CHAIN',
  ];
const ScrollBar = () => {
  const classes = useStyles();

  return (
    <Box>
    <Container maxWidth="md">
      <Box className={classes.marquee}>
      <Marquee>
      {textArray.map((text, index) => (
        <div key={index} className={classes.textElement}>
        <img src="/images/marqee.png" alt="Logo"  />
         <Typography variant='h1'>{text}</Typography>
        </div>
      ))}
        </Marquee>
        </Box>
        </Container>
        </Box>

  );
};

export default ScrollBar
