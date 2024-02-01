import React from "react";
import {
  Container,
  Box,
  makeStyles,
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";

const interfaceArray = [
  {
    image: "/images/InterfacesIcon1.png",
    title: "BETTER",
    description:
      "Multi-chain, you can buy, sell and transfer assets across different blockchain networks.",
    description1:
      "With AI powered alpha scans, risk management, sniping and a suite of many other features, ANDOR becomes your ultimate trading arsenal.",
  },
  {
    image: "/images/InterfacesIcon2.png",
    title: "FASTER",
    description:
      "Trade with just a chat command on the go. Works across multiple applications at the same time.",
    description1:
      "Trading with web3 wallets and exchanges is slow and clunky. Trading directly through your chat makes you faster than the market.",
  },
  {
    image: "/images/InterfacesIcon3.png",
    title: "SMOOTHER",
    description:
      "Simple and seamless interface, with support for “multiple” regional languages.",
    description1:
      "Trading on-chain sometimes offers terrible UX. ANDOR has a simple and minimal interface with support for many regional languages.",
  },
];
const useStyles = makeStyles((theme) => ({
  mainInterFaceBox: {
    margin:"80px 0px",
    "& h1": {
      color: "#CED0DA",
      [theme.breakpoints.up("sm")]: {
        fontSize: "54px",
        lineHeight: "72px",
        marginBottom:"60px"
      },
    },
  },
  gridBox: {
    borderRadius: "20px",
    border: "1px solid rgb(235 238 255 / 15%)",
    padding: "30px 30px 60px 30px",
    // marginBottom: "90px",
    background: "linear-gradient(-90deg,#B1B3ED,#EBEEFF, #CED0DA)",
    [theme.breakpoints.down("xs")]: {
        padding: "30px 0px",
        marginTop:"20px"
      },
  },

  interfaceCard: {
    // width: "100%",
    height: "100%",
    padding: "16px",
    borderRadius: "10px",
    background: "linear-gradient(#FFFFFF, #B1B3ED)",
    "& h2": {
    //   marginBottom: "20px",
      marginTop: "20px",
      fontSize: "28px",
      fontWeight: "500",
      lineHeight: "34px",
      color: "#000000",
    },
    "& p": {
      color: "#000000",
      marginTop:"20px"
    },
  },
}));
const InterFacesSection = () => {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery('(max-width: 600px)'); // Adjust the max-width as needed

  const marginGrid = isMobileScreen ?  "20px": "";
  
  return (
    <Box  className={classes.mainInterFaceBox}>
      <Container maxWidth="lg">
        <Box
          textAlign={"center"}
          mt={4}
          mb={4}
        >
          <Typography variant="h1">
            Andor Fi is The IOS
            <br /> of Web3 Interfaces
          </Typography>
        </Box>
          <Grid container spacing={5} className={classes.gridBox}>
            {interfaceArray?.map((interfaceData) => {
              return (
                <Grid item lg={4} md={4} sm={12} xs={12} style={{marginBottom:marginGrid}}>
                  <Box className={classes.interfaceCard}>
                    <img
                      src={interfaceData?.image}
                      alt="Logo"
                      width="100%"
                      style={{ maxWidth: "56px" }}
                    />
                    <Typography variant="h2">{interfaceData.title}</Typography> &nbsp;
                    <Typography variant="body1">
                      {interfaceData.description}
                    </Typography>
                    <Typography variant="body1">
                      {interfaceData.description1}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
      </Container>
    </Box>
  );
};

export default InterFacesSection;
