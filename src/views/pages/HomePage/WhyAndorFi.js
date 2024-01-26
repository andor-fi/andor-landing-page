import React from 'react'
import { Container, Box, makeStyles, Typography, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    whyAndorFiMainBox: {
        "& img": {
            width: "90px",
            height: "90px"
        },
        "& h1": {
            color: "#CED0DA",
            fontSize: "54px",
            lineHeight: "72px",
            fontWeight: "700",
        },
        "& h4": {
            marginTop:"20px",
            marginBottom:"10px"
        }
    },
    whyRightCard:{
        border:"1px solid rgb(235 238 255 / 15%)",
        borderRadius: "9px",
        padding:"25px",
        height:"100%",
        "& img": {
            width: "100%",
            height:"auto"
        },
    },
    whyLeftCard:{
        border:"1px solid rgb(235 238 255 / 15%)",
        borderRadius: "9px",
        padding:"25px",
        height:"100%",
        "& img": {
            width: "100%",
            height:"auto"
        },
    }
}));


function WhyAndorFi() {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="md" style={{ position: "relative" }}>
                <Box className={classes.whyAndorFiMainBox} pt={5} pb={5} mt={5} mb={5}>
                    <Box textAlign={"center"} mt={4} mb={4}>
                        <img src="../images/dollar-icon.png" />
                        <Typography variant='h1'>Why Andor Fi?</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>
                        <Box className={classes.whyLeftCard}>
                            <img src="../images/why-andor-card.png"/>
                            <Typography variant='h4'>Leverage</Typography>
                            <Typography variant='body1'>Borrow, trade & repay. Amplify your trading positions with leverage</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box className={classes.whyRightCard}>
                            <img src="../images/why-andor-card.png"/>
                            <Typography variant='h4'>2-way Profit Share</Typography>
                            <Typography variant='body1'>Trade with your friends, and earn profits together</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default WhyAndorFi