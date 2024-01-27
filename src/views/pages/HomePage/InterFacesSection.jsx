import React from 'react'
import { Container, Box, makeStyles, Typography, Button, Grid } from '@material-ui/core';

const interfaceArray = [{ image: "/images/InterfacesIcon1.png", title: "BETTER", shortDescription: "Multi-chain, you can buy, sell", description: "and transfer assets across different blockchain networks", description1: "With AI powered alpha scans, risk management, sniping and a suite of many other features, ANDOR becomes your ultimate trading arsenal." },
{ image: "/images/InterfacesIcon2.png", title: "FASTER", shortDescription: "Trade with just a chat command on the", description: "go. Works across multiple applications at the same time.", description1: "Trading with web3 wallets and exchanges is slow and clunky. Trading directly through your chat makes you faster than the market." },
{ image: "/images/InterfacesIcon3.png", title: "SMOOTHER", shortDescription: "Simple and seamless interface, with", description: "support for “multiple” regional languages.", description1: "Trading on-chain sometimes offers terrible UX. ANDOR has a simple and minimal interface with support for many regional languages." },
]
const useStyles = makeStyles((theme) => ({
    interfaceHeader: {
        "& h1": {
            marginBottom: "35px",
            fontSize: "60px",
            fontWeight: "600",
            lineHeight: "64px",
            "background": "linear-gradient(#CED0DA, #B1B3ED)",
            "WebkitBackgroundClip": "text",
            "color": "transparent"
        },
    },
    interface: {
        borderRadius: "20px",
        border: "1px solid rgb(235 238 255 / 15%)",
        padding: "30px",
        marginBottom: "90px",
        background: "linear-gradient(-90deg,#B1B3ED,#EBEEFF, #CED0DA)",
    },
    interfaceCard: {
        width: "100%",
        height: "363px",
        padding: "16px",
        borderRadius: "10px",
        "background": "linear-gradient(#FFFFFF, #B1B3ED)",
        "& h2": {
            marginBottom: "20px",
            marginTop: "20px",
            fontSize: "28px",
            fontWeight: "500",
            lineHeight: "34px",
            "color": "#000000"
        },
    }
}));
const InterFacesSection = () => {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="lg" style={{ position: "relative" }}>
                <Box textAlign={"center"} mt={4} mb={4} className={classes.interfaceHeader}>
                    <Typography variant='h1'>Andor Fi is The IOS<br /> of Web3 Interfaces</Typography>
                </Box>
                <Box className={classes.interface}>
                    <Grid container spacing={4}>
                        {interfaceArray?.map((interfaceData) => {
                            return (
                                <Grid item lg={4} md={4} sm={12} xs={12} >
                                    <Box className={classes.interfaceCard}>
                                        <img src={interfaceData?.image} alt="Logo" width="100%" style={{ maxWidth: "56px" }} />
                                        <Typography variant='h2' >{interfaceData.title}</Typography>
                                        <Typography variant='body'>{interfaceData.shortDescription} <br />{interfaceData.description}</Typography>
                                        <br />
                                        <br />
                                        <Typography variant='body'>{interfaceData.description1}</Typography>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default InterFacesSection
