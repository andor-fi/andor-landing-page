import React from "react";
import { Grid, Box, Typography, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  footer: {
    padding: '0',
    maxWidth:"65%"
  },
  footerButtonIcon:{
    width:"253px",
    height:"65px",
    borderRadius:"20px",
    fontSize:"20px",
    lineHeight:"24px",
    fontWeight:"500",
    color:"#000000",
    background:"#CED0DA"

  },
  textColor:{
    color: "#fff !important",
    fontSize:"20px",
    lineHeight:"24px",
    fontWeight:"500",
    margin:"0px 0px 20px 0px"
  },
  textColorFormate:{
    color: "#fff !important",
    fontSize:"16px",
    lineHeight:"18px",
    fontWeight:"400",
    color:"#CED0DA"
  },
  subContent:{
    display:"flex",
    width:"248px",
    margin:"10px 0px 0px 0px",
      justifyContent:"space-between"
  }

 
 

  
 
}))

export default function Footer() {
  const {
    footer,
    footerButtonIcon,
    textColor,
    textColorFormate,
    subContent
  } = useStyles()

  return (
    <Box  mt={5} pt={5}>
      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid item lg={4} md={4} className={footer} >
          <Box className={textColor}>
          Andor Fi
          </Box>
          <Typography variant="body1" className={textColorFormate}>
          ANDOR is a free-to-use chat bot that lets you perform crypto 
          transactions on the go, through your chat app. The bot also enables you to safely trade and 
          snipe for opportunities across multiple chains.
          </Typography>
        </Grid>
        <Grid item lg={4} md={4}>
        <Button variant="contained" className={footerButtonIcon}>Try Andor Fi</Button>
        <Box className={subContent} >
        <img src="/images/Social.png" alt="Logo" width="100%" style={{maxWidth:"56px"}} />
        <img src="/images/Linkdin.png" alt="Logo" width="100%" style={{maxWidth:"56px"}} />
        <img src="/images/Decord.png" alt="Logo" width="100%" style={{maxWidth:"56px"}} />
        </Box>
           
        </Grid>
      </Grid>
    </Box>
  );
}
