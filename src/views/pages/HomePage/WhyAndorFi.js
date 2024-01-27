import React from 'react'
import { Container, Box, makeStyles, Typography, Grid, Button } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const useStyles = makeStyles((theme) => ({
    whyAndorFiMainBox: {
        "& img": {
            width: "90px",
            height: "90px"
        },
        "& h1": {
            color: "#CED0DA",
            [theme.breakpoints.up('sm')]: {
                fontSize: "54px",
                lineHeight: "72px",
                fontWeight: "700",
            },
        },
        "& h4": {
            marginTop: "20px",
            marginBottom: "10px"
        }
    },
    whyRightCard: {
        border: "1px solid rgb(235 238 255 / 15%)",
        borderRadius: "9px",
        padding: "25px",
        height: "100%",
        "& img": {
            width: "100%",
            height: "auto"
        },
    },
    whyLeftCard: {
        border: "1px solid rgb(235 238 255 / 15%)",
        borderRadius: "9px",
        padding: "25px",
        height: "100%",
        "& img": {
            width: "100%",
            height: "auto"
        },
    },
    sliderCards: {
        background: "linear-gradient(-90deg, #5275F1, #5191F1,#7EAFF8)",
        width: "170px",
        height: "170px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    iconBox: {
        width: "60px",
        height: "60px",
        backgroundColor: "#D9D9D9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        "& img": {
            width: "auto",
            height: "auto",
        }
    },
    actionBtns: {
        background: "linear-gradient(-90deg, #FFFFFF, #B1B3ED)",
        marginTop: "20px",
        borderRadius: "9px",
        minWidth: "110px"
    },
    cardSlider: {
        display: "flex",
        justifyContent: "center",
    },
    tradSliderCards: {
        background: "transparent",
        border: "2px solid #7EAFF8",
        width: "170px",
        height: "170px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }
}));


const settings = {
    color: "white",
    dots: true,
    slidesToShow: 2,  // Adjust this based on the number of cards you want to show
    slidesToScroll: 1,  // Adjust this based on the number of cards you want to scroll
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '15',
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint:959,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};


function WhyAndorFi() {
    const classes = useStyles();

    return (
        <Box>
            <Container maxWidth="md" style={{ position: "relative" }}>
                <Box className={classes.whyAndorFiMainBox} pt={5} pb={5} mt={5} mb={5}>
                    <Box textAlign={"center"} mt={4} mb={4}>
                        <img src="../images/dollar-icon.png" />
                        <Typography variant='h1'>Why Andor Fi?</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box className={classes.whyLeftCard}>
                                <Slider {...settings}>
                                    <Box p={1}>
                                        <Box className={classes.sliderCards}>
                                            <Box className={classes.iconBox}>
                                                <img src="../images/users.png" />
                                            </Box>
                                            <Button className={classes.actionBtns}>Borrow</Button>
                                        </Box>
                                    </Box>
                                    <Box p={1}>
                                        <Box className={classes.tradSliderCards}>
                                            <Box className={classes.iconBox}>
                                                <img src="../images/trade-icon.png" />
                                            </Box>
                                            <Button variant="contained" style={{ minWidth: "110px", marginTop: "20px", }}>Trade</Button>
                                        </Box>
                                    </Box>
                                    <Box p={1}>
                                        <Box className={classes.tradSliderCards}>
                                            <Box className={classes.iconBox}>
                                                <img src="../images/trade-icon.png" />
                                            </Box>
                                            <Button variant="contained" style={{ minWidth: "110px", marginTop: "20px", }}>Repay</Button>
                                        </Box>
                                    </Box>
                                    <Box p={1}>
                                        <Box className={classes.sliderCards}>
                                            <Box className={classes.iconBox}>
                                                <img src="../images/users.png" />
                                            </Box>
                                            <Button className={classes.actionBtns}>Borrow</Button>
                                        </Box>
                                    </Box>
                                    <Box p={1}>
                                        <Box className={classes.tradSliderCards}>
                                            <Box className={classes.iconBox}>
                                                <img src="../images/trade-icon.png" />
                                            </Box>
                                            <Button variant="contained" style={{ minWidth: "110px", marginTop: "20px", }}>Trade</Button>
                                        </Box>
                                    </Box>
                                    <Box p={1}>
                                        <Box className={classes.tradSliderCards}>
                                            <Box className={classes.iconBox}>
                                                <img src="../images/trade-icon.png" />
                                            </Box>
                                            <Button variant="contained" style={{ minWidth: "110px", marginTop: "20px", }}>Repay</Button>
                                        </Box>
                                    </Box>
                                </Slider>
                                <Typography variant='h4'>Leverage</Typography>
                                <Typography variant='body1'>Borrow, trade & repay. Amplify your trading positions with leverage</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box className={classes.whyRightCard}>
                                <img src="../images/why-andor-card.png" />
                                <Typography variant='h4'>2-way Profit Share</Typography>
                                <Typography variant='body1'>Trade with your friends, and earn profits together</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default WhyAndorFi