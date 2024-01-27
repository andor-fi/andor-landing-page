import React from "react";
import { Grid, Box, Typography, makeStyles, Button, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerMainBox:{
    marginTop:"30px",
    paddingBottom:"30px"
  },
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
    background: "linear-gradient(-90deg,#B1B3ED,#CED0DA)",


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
  },
bannerTextBox:{
    display:"flex",
    justifyContent:"space-between",
    width:"100%",
    padding:"0px 40px",
    [theme.breakpoints.down('xs')]: {
        padding:"0px 10px",
      },
}
 
}))

export default function Footer() {
  const {
    footer,
    footerButtonIcon,
    textColor,
    textColorFormate,
    subContent,
    bannerMainBox,
    bannerTextBox
  } = useStyles()

  return (
    <Box className={bannerMainBox}>
        <Container maxWidth="md" style={{position:"relative"}}>
        <Box className={bannerTextBox}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item lg={6} md={6} className={footer} >
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
      </Container>
    </Box>
  );
}
