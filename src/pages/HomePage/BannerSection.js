import React from "react";
import { Container, Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerMainBox: {
    marginTop: "-5rem",
    marginBottom: "5rem",
    "& h3": {
        [theme.breakpoints.up("xs")]:{
            marginLeft:"10px"
        }
    },
  },

  bannerTextBox: {
    position: "absolute",
    top: "66%",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexWrap:"wrap",
    // [theme.breakpoints.down("xs")]:{
    //     top:"58%"
    // }
  },
}));

function BannerSection() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerMainBox}>
      <Container maxWidth="md">
        <Box style={{ position: "relative" }}>
            <Box className={classes.bannerTextBox}>
              <Typography variant="h3" style={{marginBottom:"12px"}}>
                Welcome to <br /> Andor Fi
              </Typography>
              <Typography
                variant="body1"
                style={{ maxWidth: "185px",marginBottom:"12px"}}
              >
                Trading made simpler, faster and accessible for everyone.
              </Typography>
            </Box>
          <img src="../images/home-banner-image.png" alt="logo" width="100%" />
        </Box>
      </Container>
    </Box>
  );
}

export default BannerSection;
