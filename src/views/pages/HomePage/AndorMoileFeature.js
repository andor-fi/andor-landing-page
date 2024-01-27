import React from 'react'
import { Container, Box, makeStyles, Typography, Button, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    mainBox:{
        padding:"30px 0px"
    },
    featureMainBox: {
        position: "absolute",
        top: "30%",
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            position: "relative",
            top:"-6rem"
        },
        "& h3": {
            marginBottom: "20px"
        }
    },
    gridMargin:{
        marginTop:"20px",
        [theme.breakpoints.up('sm')]: {
            marginTop:"4rem",
        },
    },
    featureBox1: {
        maxWidth: "240px",
        [theme.breakpoints.down('xs')]: {
            maxWidth: "unset",
        },
    },
    featureBox2: {
        maxWidth: "270px",
        marginLeft: "auto",
        [theme.breakpoints.down('xs')]: {
            maxWidth: "unset",
            marginLeft: "unset",
        },
    },
    featureBox3: {
        maxWidth: "240px",
        [theme.breakpoints.down('xs')]: {
            maxWidth: "unset",
        },
    },
    featureBox4: {
        maxWidth: "270px",
        marginLeft: "auto",
        [theme.breakpoints.down('xs')]: {
            maxWidth: "unset",
            marginLeft: "unset",
        },
    }
}));



function AndorMoileFeature() {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox}>
            <Container maxWidth="md" style={{ position: "relative" }}>
                <img src="../images/andor-mobile-feature.png" width="100%" />
                <Box className={classes.featureMainBox}>
                    <Grid container justifyContent="space-between" spacing={4}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Box className={classes.featureBox1}>
                                <Typography variant="h3">Sniper</Typography>
                                <Typography variant="body1">Seize rapid price movements and arbitrage chances as our bot identifies and executes trades upon meeting specific conditions.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Box className={classes.featureBox2}>
                                <Typography variant="h3">DEX Trading</Typography>
                                <Typography variant="body1">Easily trade on DEX platforms from your chat app, offering Buy/Sell with Limit, Market, and Partial order options.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="space-between" className={classes.gridMargin} spacing={4}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Box className={classes.featureBox3}>
                                <Typography variant="h3">Leverage</Typography>
                                <Typography variant="body1">Spot trading with leverage.
                                    Place limit orders for buy & sell while enjoying max leverage per coin.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Box className={classes.featureBox4}>
                                <Typography variant="h3">Alpha scan</Typography>
                                <Typography variant="body1">Aggregate data from diverse tools and platforms, and offer AI-driven trade recommendations. Keep an eye on wallet activities of whales, influencers, and alpha traders.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default AndorMoileFeature