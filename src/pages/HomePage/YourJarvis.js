import React from 'react'
import { Container, Box, makeStyles, Typography, Grid, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    jarvisMainBox: {
        "& h1": {
            "background": "linear-gradient(#CED0DA, #B1B3ED)",
            "WebkitBackgroundClip": "text",
            "color": "transparent",
            marginTop: "-10px",
            marginBottom: "-10px",
            [theme.breakpoints.up('sm')]: {
                fontSize: "54px",
                lineHeight: "64px",
                fontWeight: "700",
            },
        },
        "& h4": {
            marginTop: "20px",
            marginBottom: "10px",
            "background": "linear-gradient(#CED0DA, #B1B3ED)",
            "WebkitBackgroundClip": "text",
            "color": "transparent",
        },
        "& h3": {
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "38px",
            marginTop: "20px",
            marginBottom: "10px",
            "background": "linear-gradient(#CED0DA, #B1B3ED)",
            "WebkitBackgroundClip": "text",
            "color": "transparent",
        }
    },
    leftBtnBox1: {
        minWidth: '150px',
        color: "#fff",
        background: "linear-gradient(90deg, #7EAFF8, #5275F1, #5191F1)",
        borderRadius: "12px"
    },
    leftBtnBox2: {
        minWidth: '150px',
        background: "linear-gradient(90deg, #CED0DA, #B1B3ED)",
        borderRadius: "12px",
        marginTop: "30px"
    },
    leftBtnBox3: {
        minWidth: '150px',
        color: "#fff",
        background: "linear-gradient(90deg, #7EAFF8, #5275F1, #5191F1)",
        borderRadius: "12px",
        marginTop: "30px"
    },
    leftBtnBox4: {
        minWidth: '150px',
        background: "linear-gradient(90deg, #CED0DA, #B1B3ED)",
        borderRadius: "12px",
        marginTop: "30px"
    },
    tryOutBtn: {
        border: "2px solid #7EAFF8",
        color: "#fff",
        borderRadius: "12px",
        minWidth: "155px",
        marginTop: "30px",
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "100%",
        maxWidth: "315px",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "500"
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            justifyContent: "center"
        },
    },
    gridItem1: {
        textAlign: "end",
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    gridItem2: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    heading: {
        "background": "linear-gradient(#CED0DA, #B1B3ED)",
        "WebkitBackgroundClip": "text",
        "color": "transparent",
    }
}));


function YourJarvis() {
    const classes = useStyles();

    return (
        <Box id="feature">
            <Container maxWidth="md">
                <Box className={classes.jarvisMainBox} pt={5} pb={5} mt={5} mb={5}>
                    <Box textAlign={"center"} mt={4} mb={4}>
                        <Typography variant='h1'>Andor Fi Is</Typography>
                        <Typography variant='h1'> Your Jarvis</Typography>

                    </Box>
                    <Grid container spacing={2} alignItems="center" className={classes.gridContainer}>
                        <Grid item xs={6} sm={4} md={4} lg={3} className={classes.gridItem1}>
                            <Button className={classes.leftBtnBox1}>Trade & Buy/Sell</Button>
                            <Box textAlign={"center"}>
                                <Button className={classes.leftBtnBox2}>Snipe</Button><br />
                                <Button className={classes.leftBtnBox3}>AI Tooling</Button>
                            </Box>
                            <Button className={classes.leftBtnBox4}>Risk Management</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={6}>
                            <img src="../images/jarvis-image.png" alt="andor fi" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={3} className={classes.gridItem2}>
                            <Button className={classes.leftBtnBox1}>Leverage</Button>
                            <Box textAlign={"center"}>
                                <Button className={classes.leftBtnBox2}>Mirror Trades</Button><br />
                                <Button className={classes.leftBtnBox3}>Manage Assets</Button> <br />
                            </Box>
                            <Button className={classes.leftBtnBox4}>Halt Sniping</Button>
                        </Grid>
                    </Grid>
                    <Box textAlign={"center"} mt={5}>
                        <Typography variant="h3">How it Works?</Typography>
                        <Typography variant="body1" style={{ margin: "0px auto", maxWidth: "375px" }} className={classes.heading}>Andor-Fi, your cryptocurrency trading Jarvis, empowers you with commands like buying, selling, sniping, mirror settings, stop loss, and comprehensive data access.</Typography>
                        <Button className={classes.tryOutBtn}>Try Out</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default YourJarvis